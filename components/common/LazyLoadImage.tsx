import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image"
const LazyLoadImage = ({ src, alt, className, width = 200, height = 200 }: { src: string, alt: string, className: string, height: number, width: number }) => {
  const [imageSrc, setImageSrc] = useState('');
  const imageRef = useRef(null);

  useEffect(() => {
    const _ref = imageRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px 100px 0px' }
    );
    _ref && observer.observe(_ref);
    return () => {
      _ref && observer.unobserve(_ref);
    };
  }, [src]);

  return <Image ref={imageRef} width={width} height={height} src={imageSrc} alt={alt} className={className} />;
};

export default LazyLoadImage;
