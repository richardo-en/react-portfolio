import { useLang } from "../../../i18n/LanguageContext";

export default function WorkHero() {
  const { t } = useLang();

  return (
    <section className="bg-background-light border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col gap-8">
        <div className="max-w-2xl space-y-5">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
            {t.work.hero.title}
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed">
            {t.work.hero.subtitle}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-200" />
      </div>
    </section>
  );
}
