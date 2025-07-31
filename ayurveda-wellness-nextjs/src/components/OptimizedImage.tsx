
import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw',
  objectFit = 'cover',
  objectPosition = 'center',
}: OptimizedImageProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    
    // Try loading the image directly first
    const img = new Image();
    
    img.onload = () => {
      setCurrentSrc(src);
      setLoading(false);
      setError(false);
      console.log(`Successfully loaded image: ${src}`);
    };
    
    img.onerror = () => {
      setLoading(false);
      setError(true);
      console.error(`Failed to load image: ${src}`);
    };
    
    img.src = src;
  }, [src]);

  if (error) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center min-h-[200px] ${className}`} 
        role="img" 
        aria-label={alt}
      >
        <div className="text-center p-4">
          <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-gray-500 text-sm block">Image not available</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-pea-green border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <div className="text-sm text-gray-600 mb-1">Loading image...</div>
          </div>
        </div>
      )}
      {currentSrc && (
        <img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          className={`w-full h-full transition-opacity duration-500 ${
            loading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            objectFit,
            objectPosition,
          }}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          decoding={priority ? 'sync' : 'async'}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
