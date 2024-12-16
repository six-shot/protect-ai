import React, { useEffect, useRef } from "react";

const WebGLContainer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      // Example WebGL initialization
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) {
        // Set up WebGL clear color and other properties
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
      } else {
        console.error("WebGL is not supported in this browser.");
      }
    }
  }, []);

  return (
    <div className="webgl-container">
      <div className="container">
        <canvas ref={canvasRef} width="661" height="546"></canvas>
      </div>
    </div>
  );
};

export default WebGLContainer;
