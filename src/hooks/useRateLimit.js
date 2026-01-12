import { useState, useCallback } from 'react';

const useRateLimit = (limit = 3, windowMs = 60000) => {
  const [attempts, setAttempts] = useState(0);
  const [lastAttemptTime, setLastAttemptTime] = useState(null);

  const canSubmit = useCallback(() => {
    if (lastAttemptTime && Date.now() - lastAttemptTime < windowMs) {
      return attempts < limit;
    }
    return true;
  }, [attempts, lastAttemptTime, limit, windowMs]);

  const recordAttempt = useCallback(() => {
    setAttempts(prev => prev + 1);
    setLastAttemptTime(Date.now());
  }, []);

  const reset = useCallback(() => {
    setAttempts(0);
    setLastAttemptTime(null);
  }, []);

  return { canSubmit, recordAttempt, reset, attemptsRemaining: Math.max(0, limit - attempts) };
};

export default useRateLimit;
