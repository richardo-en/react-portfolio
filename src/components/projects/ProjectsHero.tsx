import { useLang } from "../../../i18n/LanguageContext";

export default function ProjectsHero() {
  const { t } = useLang();

  return (
    <section className="bg-background-light">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-24">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/80 to-black text-white p-12">
          <h1 className="text-4xl md:text-5xl font-black">
            {t.myProjects.hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-white/90">
            {t.myProjects.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
