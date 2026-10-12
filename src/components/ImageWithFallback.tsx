import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback?: string;
  fallbackSrc?: string;
  alt: string;
  fallbackText?: string;
  aspectRatioClass?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallback,
  fallbackSrc,
  alt,
  fallbackText,
  aspectRatioClass = "aspect-[16/9]",
  className = "",
  ...props
}) => {
  const effectiveFallback = fallback || fallbackSrc;
  
  // Decide initial source: if src is a local path that doesn't exist on static server,
  // we can use the fallback right away or let onError catch it
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasTriedFallback, setHasTriedFallback] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasTotalError, setHasTotalError] = useState<boolean>(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasTriedFallback(false);
    setIsLoaded(false);
    setHasTotalError(false);
  }, [src, effectiveFallback]);

  const handleError = () => {
    if (!hasTriedFallback && effectiveFallback && effectiveFallback !== currentSrc) {
      setHasTriedFallback(true);
      setCurrentSrc(effectiveFallback);
    } else if (!hasTriedFallback && !effectiveFallback) {
      // Automatic high quality fallback based on alt
      const encoded = encodeURIComponent(alt.slice(0, 20));
      setHasTriedFallback(true);
      setCurrentSrc(`https://picsum.photos/seed/${encoded}/800/800`);
    } else {
      setHasTotalError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-stone-100 ${aspectRatioClass} ${className}`}>
      {/* Skeleton shimmer before load */}
      {!isLoaded && !hasTotalError && (
        <div className="absolute inset-0 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 animate-pulse pointer-events-none" />
      )}

      {hasTotalError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-stone-50 border border-stone-200 text-stone-500">
          <span className="text-[11px] font-semibold tracking-wide text-stone-600">
            {fallbackText || alt}
          </span>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          loading="lazy"
          crossOrigin="anonymous"
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithFallback;
