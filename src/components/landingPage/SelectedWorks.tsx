import ProjectCard from "./ProjectCard";
import { useLang } from "../../../i18n/LanguageContext";

export default function SelectedWorks() {
  const { t } = useLang();

  return (
    <section className="py-20">
      <h3 className="text-3xl font-bold">{t.myProjects.title}</h3>
      <p className="text-slate-500 mb-10">{t.myProjects.subtitle}</p>

      <div className="grid md:grid-cols-3 gap-6">
        {t.myProjects.items.map((p: any) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

