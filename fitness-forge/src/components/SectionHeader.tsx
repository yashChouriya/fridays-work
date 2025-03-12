interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} mb-12`}>
      {subtitle && (
        <span className={`inline-block text-sm font-bold tracking-wider uppercase mb-2 ${light ? 'text-primary' : 'text-primary'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold font-heading mb-4 ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;