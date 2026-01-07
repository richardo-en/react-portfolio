import { useLang } from "../../../i18n/LanguageContext";

export default function ContactHero() {
  const { t } = useLang();

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <h1 className="text-4xl md:text-5xl font-black">
          {t.contact.hero.title}
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl">
          {t.contact.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
