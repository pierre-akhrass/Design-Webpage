import './SectionTitle.scss';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`section-title${className ? ' ' + className : ''}`}>
      {children}
    </h2>
  );
}
