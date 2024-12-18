import React, { useState, useEffect } from "react";



const Preloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAssetsLoaded = () => {
      const images = document.querySelectorAll("img");
      const fonts = document.fonts;

      // Check if all images are loaded
      const imagesLoaded = Array.from(images).every((img) => img.complete);

      // Check if all fonts are loaded
      const fontsLoaded = fonts
        ? Array.from(fonts).every((font) => font.status === "loaded")
        : true;

      return imagesLoaded && fontsLoaded;
    };

    const startLoadingCheck = () => {
      const checkInterval = setInterval(() => {
        if (checkAssetsLoaded()) {
          clearInterval(checkInterval);
          setIsLoading(false);
        }
      }, 100);

      // Fallback timeout in case of any loading issues
      setTimeout(() => {
        clearInterval(checkInterval);
        setIsLoading(false);
      }, 5000);
    };

    // Start checking asset loading
    startLoadingCheck();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D21DE]">
        <div className="animate-pulse">
          <svg
            className="w-20 h-20 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};


const SiteWrapper = ({ children }) => {
  return <Preloader>{children}</Preloader>;
};

export default SiteWrapper;
