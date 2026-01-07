import { useLang } from "../../../i18n/LanguageContext";

export default function WorkSkills() {
  const { t } = useLang();

  return (
    <section className="bg-background-light">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-20">
        <h2 className="text-2xl font-bold mb-8">
          {t.work.skills.title}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {t.work.skills.items.map((skill: string, i: number) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                rounded-lg border border-gray-200 bg-white
                px-3 py-3 text-sm font-medium
                text-gray-700
                transition-all
                hover:border-primary hover:text-primary
                hover:shadow-sm hover:scale-[1.02]
                cursor-default
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
