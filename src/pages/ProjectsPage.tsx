import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsFilters from "../components/projects/ProjectsFilters";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { useState } from "react";
import { useLang } from "../../i18n/LanguageContext";


export default function ProjectsPage() {

    const { t } = useLang();

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? t.myProjects.items
      : t.myProjects.items.filter(
          (p: any) => p.category === activeFilter
        );

  return (
    <main>
      <ProjectsHero />

      <ProjectsFilters
        filters={t.myProjects.filters}
        activeFilter={activeFilter}
        onChange={setActiveFilter}
      />

      <ProjectsGrid projects={filteredProjects} />
    </main>
  );
}
