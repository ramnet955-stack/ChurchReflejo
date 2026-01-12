import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Hook for scroll-triggered reveal animations using IntersectionObserver
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - ref to attach, and visibility state
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after first reveal (one-time animation)
          if (options.once !== false) {
            observer.unobserve(element);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
        ...options
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
};

/**
 * Hook for parallax scroll effects
 * @param {number} speed - Parallax speed multiplier (0.1 - 1)
 * @returns {[React.RefObject, number]} - ref to attach, and transform value
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const viewportHeight = window.innerHeight;
      
      // Calculate parallax offset based on element position
      const parallaxOffset = (scrolled - elementTop + viewportHeight) * speed;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset];
};

/**
 * Hook for staggered animations on children
 * @param {number} itemCount - Number of items to stagger
 * @param {number} baseDelay - Base delay in ms
 * @param {number} staggerDelay - Delay between each item in ms
 */
export const useStaggeredAnimation = (itemCount, baseDelay = 0, staggerDelay = 100) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the appearance of items
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i]);
            }, baseDelay + (i * staggerDelay));
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [itemCount, baseDelay, staggerDelay]);

  return [containerRef, visibleItems];
};

/**
 * Hook for mouse position tracking (for hover effects)
 * @returns {{ x: number, y: number }} - Normalized mouse position (-1 to 1)
 */
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};

/**
 * Hook for counting up animation
 * @param {number} end - Target number
 * @param {number} duration - Animation duration in ms
 * @param {boolean} start - Whether to start counting
 */
export const useCountUp = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

/**
 * Hook for typewriter text effect
 * @param {string} text - Text to type
 * @param {number} speed - Typing speed in ms
 * @param {boolean} start - Whether to start typing
 */
export const useTypewriter = (text, speed = 50, start = true) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!start) return;
    
    setDisplayText('');
    setIsComplete(false);
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return [displayText, isComplete];
};

// Framer Motion animation variants for consistency
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};
