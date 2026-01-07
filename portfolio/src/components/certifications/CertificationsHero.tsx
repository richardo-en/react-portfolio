import { useLang } from "../../../i18n/LanguageContext";

export default function CertificationsHero() {
  const { t } = useLang();

  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-semibold">
          {t.certifications.hero.badge}
        </span>

        <h1 className="text-4xl md:text-5xl font-black">
          {t.certifications.hero.title}
        </h1>

        <p className="max-w-2xl mx-auto text-blue-100">
          {t.certifications.hero.subtitle}
        </p>

      </div>
    </section>
  );
}
