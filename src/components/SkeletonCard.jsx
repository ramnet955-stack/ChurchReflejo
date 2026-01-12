import React from 'react';

const SkeletonCard = ({ className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md overflow-hidden animate-pulse ${className}`}>
    <div className="h-48 bg-gray-200" />
    <div className="p-6 space-y-4">
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-2/3" />
      <div className="pt-4">
        <div className="h-10 bg-gray-200 rounded w-32" />
      </div>
    </div>
  </div>
);

const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" style={{ width: `${100 - (i * 15)}%` }} />
    ))}
  </div>
);

const SkeletonCircle = ({ size = 40, className = '' }) => (
  <div 
    className={`rounded-full bg-gray-200 animate-pulse ${className}`} 
    style={{ width: size, height: size }} 
  />
);

const SkeletonBanner = ({ className = '' }) => (
  <div className={`h-96 bg-gray-200 animate-pulse ${className}`} />
);

export { SkeletonCard, SkeletonText, SkeletonCircle, SkeletonBanner };
