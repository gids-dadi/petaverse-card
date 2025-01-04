import React from "react";

interface CircularProgressBarProps {
  percentage?: number;
  size?: number;
  strokeWidth?: number;
  imageSrc?: string;
  imageSize?: number;
  strokeColor: string;
  strokeBackgroundColor: string;
  backgroundStrokeWidth?: number; // New prop for the background circle's stroke width
}

export const CircularProgressBar = ({
  percentage = 0,
  size = 120,
  strokeWidth = 10,
  imageSrc,
  imageSize = 40,
  strokeColor,
  strokeBackgroundColor,
  backgroundStrokeWidth = 20, // Default larger background stroke
}: CircularProgressBarProps) => {
  // Calculate the radius for both circles
  const radius = (size - strokeWidth) / 2; // Progress Circle radius
  const backgroundRadius = radius + (backgroundStrokeWidth - strokeWidth) / 2; // Background Circle radius
  const circumference = 2 * Math.PI * radius; // Circumference for progress circle
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size + backgroundStrokeWidth,
        height: size + backgroundStrokeWidth,
      }}
    >
      <svg
        width={size + backgroundStrokeWidth}
        height={size + backgroundStrokeWidth}
        className="absolute"
        style={{
          transform: "rotate(30deg)", // Rotate so progress starts from the top
        }}
      >
        {/* Background Circle */}
        <circle
          cx={(size + backgroundStrokeWidth) / 2}
          cy={(size + backgroundStrokeWidth) / 2}
          r={backgroundRadius}
          stroke={strokeBackgroundColor}
          strokeWidth={backgroundStrokeWidth} // Larger stroke width for background
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={(size + backgroundStrokeWidth) / 2}
          cy={(size + backgroundStrokeWidth) / 2}
          r={radius + 4}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      {/* Centered Image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt="center-icon"
          className="absolute rounded-full"
          style={{
            width: imageSize,
            height: imageSize,
          }}
        />
      )}
      {/* Optional Percentage Text */}
      <span className="absolute text-lg font-semibold text-green-500">
        {/* {percentage}% */}
      </span>
    </div>
  );
};
