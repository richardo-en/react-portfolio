import { useLang } from "../../../i18n/LanguageContext";
export default function TrustedBy() {
  const { t } = useLang();

  return (
    <section className="py-16 border-y border-gray-200">
      <h3 className="text-center text-sm font-bold uppercase tracking-wider text-slate-500 mb-10">
        {t.trustedBy.title}
      </h3>

      <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10">
        {t.trustedBy.companies.map((company: any) => (
          <a
            key={company.id}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition flex "
            title={company.name}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-10 md:h-12 object-contain pr-2"
            />

            <div className="text-2xl font-black text-[#0d121b] dark:text-white flex items-center gap-2">
              {company.name}
            </div>

          </a>
        ))}
      </div>

    </section>
  );
}
