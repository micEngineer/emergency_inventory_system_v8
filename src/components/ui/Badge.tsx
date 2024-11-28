import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

export function Badge({ children, color = '#3B82F6' }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{
        backgroundColor: `${color}15`,
        color: color,
      }}
    >
      {children}
    </span>
  );
}