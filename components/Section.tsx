import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-dark mb-8 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-16 after:h-1 after:bg-primary">
          {title}
        </h2>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;