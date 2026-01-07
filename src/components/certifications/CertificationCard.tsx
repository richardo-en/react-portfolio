type Props = {
  title: string;
  issuer: string;
  year: string;
  img: string;
};

export default function CertificationCard({
  title,
  issuer,
  year,
  img,
}: Props) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* IMAGE TOP */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* YEAR BADGE */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow">
          {year}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col gap-1">
        <h3 className="text-lg font-bold leading-tight">
          {title}
        </h3>

        <p className="text-sm text-slate-500">
          {issuer}
        </p>
      </div>
    </div>
  );
}
