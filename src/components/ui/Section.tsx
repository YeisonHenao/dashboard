import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'transparent';
}

const paddingClasses = {
  none: '',
  sm: 'py-4',
  md: 'py-6',
  lg: 'py-8',
  xl: 'py-12',
};

const backgroundClasses = {
  white: 'bg-white dark:bg-gray-800',
  gray: 'bg-gray-50 dark:bg-gray-900',
  transparent: '',
};

const Section = ({
  children,
  title,
  subtitle,
  className = '',
  padding = 'md',
  background = 'transparent',
}: SectionProps) => {
  return (
    <section className={`${backgroundClasses[background]} ${className}`}>
      <div className={`container mx-auto px-4 ${paddingClasses[padding]}`}>
        {(title || subtitle) && (
          <div className="mb-8">
            {title && (
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-600 dark:text-gray-300">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section; 