'use client';

import { ReactNode } from 'react';

type ScrollButtonProps = {
  targetId: string;
  children: ReactNode;
  className?: string;
  offset?: number;
};

export default function ScrollButton({
  targetId,
  children,
  className,
  offset = 100,
}: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);

    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}