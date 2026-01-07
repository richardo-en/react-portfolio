type Props = {
  title: string;
  text: string;
  icon: string;
};

export default function DriveCard({ title, text, icon }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 p-8 text-center bg-background-light">
      <img
              src={icon}
              className="h-10 md:h-12 object-contain pr-2 mx-auto"
            />
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-500 text-sm">{text}</p>
    </div>
  );
}
