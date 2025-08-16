// components/DashboardIcons.tsx
import * as React from "react";

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export const TotalBookingIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  strokeWidth = 1.8,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Calendar */}
    <rect x="3" y="4.5" width="18" height="16" rx="2" />
    <path d="M8 3v3M16 3v3M3 9h18" />
    {/* Tally marks to suggest “total” */}
    <path d="M7 13h4M7 17h10" />
  </svg>
);

export const ActiveBookingIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  strokeWidth = 1.8,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Clock for “aktif / ongoing” */}
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7v5l3 2" />
    {/* Activity ring */}
    <path d="M4 12a8 8 0 0 1 8-8" />
  </svg>
);

export const FavoriteIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  strokeWidth = 1.8,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Heart outline */}
    <path d="M20.84 6.61a5.5 5.5 0 0 0-7.78 0L12 7.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21l8.84-6.61a5.5 5.5 0 0 0 0-7.78Z" />
  </svg>
);

export const RewardPointsIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  strokeWidth = 1.8,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Medal / Reward */}
    <circle cx="12" cy="13" r="5" />
    <path d="M9 3h6l-1.5 4h-3L9 3z" />
    {/* Star inside the medal */}
    <path d="M12 11.4l.95 1.92 2.12.31-1.53 1.49.36 2.09L12 16.8l-1.9 1 .36-2.09-1.53-1.49 2.12-.31L12 11.4z" />
  </svg>
);
