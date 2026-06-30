import './SectionTitle.scss';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

// Figma node 1172:365 – Montserrat Bold 32px #153cbd centered ls -0.64px
export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`section-title${className ? ' ' + className : ''}`}>
      {children}
    </h2>
  );
}
