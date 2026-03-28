import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionTitleProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  level?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center' | 'right';
  as?: React.ElementType; // más flexible que usar siempre <header>
}

const headingStyles = {
  h1: 'text-4xl md:text-5xl',
  h2: 'text-3xl md:text-4xl',
  h3: 'text-2xl md:text-3xl',
};

const alignmentStyles = {
  left: 'text-left',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
};

const SectionTitle = ({
  title,
  description,
  level = 'h2', // ✅ mejor default SEO
  align = 'left',
  as: Wrapper = 'div',
  className,
  ...props
}: SectionTitleProps) => {
  const Tag = level;

  return (
    <Wrapper
      className={cn(
        'max-w-4xl py-6 mb-8',
        alignmentStyles[align],
        className
      )}
      {...props}
    >
      <Tag
        className={cn(
          'font-extrabold tracking-tight text-[#00338D] mb-4',
          headingStyles[level]
        )}
      >
        {title}
      </Tag>

      {description && (
        <p className="text-lg text-muted-foreground text-[#6B769B] leading-relaxed mx-auto">
          {description}
        </p>
      )}

      <div
        className={cn(
          'h-1 w-12 bg-[#00338D] mt-4 rounded-full',
          align === 'center' && 'mx-auto'
        )}
      />
    </Wrapper>
  );
};

export default SectionTitle;