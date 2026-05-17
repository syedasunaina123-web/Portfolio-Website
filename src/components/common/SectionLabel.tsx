type SectionLabelProps = {
  number: string;
  title: string;
};

export function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{title}</p>
    </div>
  );
}
