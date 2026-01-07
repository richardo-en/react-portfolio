type Props = {
  title: string;
  description: string;
  icon: string;
  colorClass: string;
};

export default function FavoriteItem({
  title,
  description,
  icon,
  colorClass,
}: Props) {
  return (
    <div className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${colorClass}`}>
            <img src={icon} className="h-10 md:h-12 object-contain p-2 mx-auto" />
      </div>

      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>
        <p className="text-xs text-slate-500 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}
