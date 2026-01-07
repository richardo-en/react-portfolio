import { useParams, Link } from "react-router-dom";
import { useLang } from "../../../../i18n/LanguageContext";
import ProjectHeroDetails from "./ProjectHeroDetails";
import ProjectSidebar from "./ProjectSidebar";
import ProjectContent from "./ProjectContent";
import ProjectGallery from "./ProjectGallery";
import { projectImageMap } from "./converts";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useLang();

  const project = t.projectsDetail.items.find(
    (p: any) => p.slug === slug
  );

  if (!project) return null;
      
  const projectWithImages = {
    ...project,
    heroImage: projectImageMap[project.heroImage],
    gallery: project.gallery.map(
      (key: string) => projectImageMap[key]
    ),
  };

  return (
    <main>
      <ProjectHeroDetails project={projectWithImages}/>

      <section className="bg-white py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-16">
          <ProjectContent project={project} />
          <ProjectSidebar project={project} />
        </div>
      </section>

      {project.slug !== "mobile-game-unity" && (
        <ProjectGallery gallery={projectWithImages.gallery} />
      )}
      

      <div className="py-12 text-center">
        <Link to="/projects" className="text-primary font-semibold">
          ← {t.projectsDetail.backToProjectsButton}
        </Link>
      </div>
    </main>
  );
}
