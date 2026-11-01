export default function SectionHeading({ as: Tag = 'h2', children, intro, light = false, className = '' }) {
  return (
    <div className={className}>
      <Tag className={`text-3xl leading-tight sm:text-4xl ${light ? 'text-brand-cream' : 'text-brand-green'}`}>{children}</Tag>
      {intro && (
        <p className={`para mt-4 max-w-2xl text-lg leading-relaxed ${light ? 'text-brand-cream/85' : 'text-brand-green/85'}`}>{intro}</p>
      )}
    </div>
  );
}
