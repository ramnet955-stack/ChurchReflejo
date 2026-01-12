import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', color = 'amber' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    amber: 'border-amber-500 border-t-transparent',
    blue: 'border-blue-600 border-t-transparent',
    white: 'border-white border-t-transparent'
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} border-4 rounded-full animate-spin`}
      />
    </div>
  );
};

// Animated dots loader
const DotsLoader = ({ color = 'amber' }) => {
  const dotColors = {
    amber: 'bg-amber-500',
    blue: 'bg-blue-600',
    white: 'bg-white'
  };

  return (
    <div className="flex items-center justify-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`w-2.5 h-2.5 rounded-full ${dotColors[color]}`}
          animate={{
            y: [0, -8, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

// Logo pulse loader
const LogoLoader = () => (
  <motion.div
    className="relative"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg">
      <span className="text-3xl font-black text-white">R</span>
    </div>
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl"
      animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
    />
  </motion.div>
);

// Skeleton loader for cards
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="h-48 skeleton" />
    <div className="p-4 space-y-3">
      <div className="h-6 w-3/4 skeleton rounded" />
      <div className="h-4 w-full skeleton rounded" />
      <div className="h-4 w-2/3 skeleton rounded" />
    </div>
  </div>
);

// Page loader with nice animation
const PageLoader = ({ message = 'Cargando...' }) => (
  <motion.div 
    className="min-h-[400px] flex flex-col items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <LogoLoader />
    <motion.p 
      className="mt-6 text-gray-500 font-medium"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {message}
    </motion.p>
    <motion.div
      className="mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <DotsLoader color="amber" />
    </motion.div>
  </motion.div>
);

// Full screen loader
const FullPageLoader = ({ message = 'Cargando...' }) => (
  <motion.div 
    className="fixed inset-0 z-50 bg-gray-50 flex flex-col items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <LogoLoader />
    <motion.p 
      className="mt-6 text-gray-600 font-medium text-lg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {message}
    </motion.p>
    <motion.div
      className="mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <DotsLoader color="amber" />
    </motion.div>
  </motion.div>
);

// Button loading state
const ButtonLoader = ({ color = 'white' }) => (
  <div className="flex items-center gap-2">
    <LoadingSpinner size="sm" color={color} />
    <span>Cargando...</span>
  </div>
);

export { 
  LoadingSpinner, 
  DotsLoader,
  LogoLoader,
  SkeletonCard,
  PageLoader, 
  FullPageLoader,
  ButtonLoader
};
