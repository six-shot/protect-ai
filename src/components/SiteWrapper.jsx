import React, { useState, useEffect } from "react";

const Preloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAssetsLoaded = () => {
      const images = document.querySelectorAll("img");
      const fonts = document.fonts;
      const videos = document.querySelectorAll("video");

      // Check if all images are loaded
      const imagesLoaded = Array.from(images).every((img) => img.complete);

      // Check if all fonts are loaded
      const fontsLoaded = fonts
        ? Array.from(fonts).every((font) => font.status === "loaded")
        : true;

      // Check if all videos are loaded
      const videosLoaded = Array.from(videos).every((video) => {
        return video.readyState >= 4; // readyState 4 means video is fully loaded
      });

      return imagesLoaded && fontsLoaded && videosLoaded;
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2D21DE] ">
        <div className="flex gap-4 items-center animate-pulse">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="shield-icon text-white w-[60px] h-[60px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-0.5-7-5-7-10V6l7-4z" />
            </svg>
          </div>
          <h4 className="text-white reyhan-medium uppercase text-[30px]">
            Protect AI
          </h4>
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
