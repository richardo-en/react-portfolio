import ProjectCard from "./ProjectCard";
import portfolioImage from "@projects/portfolio/portfolio.png"
import webGame from "@projects/webGame/webGame.png"
import deligo from "@projects/deligo/deligo.png"
import { useLang } from "../../../i18n/LanguageContext";

export const projectImages: Record<string, string> = {
  portfolio: portfolioImage,
  webGame: webGame,
  deligo: deligo,
};



type Props = {
  projects: any[];
};

export default function ProjectsGrid({ projects }: Props) {
  const { t } = useLang();
  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            {...project}
            linkLabel={t.myProjects.linkLabel}
            image={projectImages[project.image]}
          />
        ))}
      </div>
    </section>
  );
}
