type Props = {
  period: string;
  title: string;
  description: string;
};

export default function TimelineItem({ period, title, description }: Props) {
  return (
    <div className="border-l-2 border-primary pl-6">
      <span className="text-sm text-primary font-bold">{period}</span>
      <h3 className="font-bold mt-1">{title}</h3>
      <p className="text-slate-500 text-sm mt-2">{description}</p>
    </div>
  );
}
