import HeroStats from "./HeroStats";
import { useLang } from "../../../i18n/LanguageContext";
import Button from "../common/Button";
import profileImg from "../../static/images/personal_image_intro_min.jpg";
import { Link } from "react-router-dom";


export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="flex flex-col-reverse lg:flex-row gap-12 py-20">
      {/* Text */}
      <div className="flex-1 space-y-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
          <span className="size-2 rounded-full bg-primary" /> 
          {/* animate-pulse */}
          <span className="text-xs font-bold text-primary uppercase">
            {t.hero.available}
          </span>
        </span>

        <h1 className="text-6xl font-black leading-tight">
          {t.hero.title} <span className="text-primary">{t.hero.highlight}</span>
        </h1>

        <p className="text-slate-500 max-w-xl">
          {t.hero.subtitle}
        </p>

        <div className="flex gap-4">
          <Link to="/projects" className="hover:text-primary transition">
             <Button >{t.hero.ctaProjects}</Button>
          </Link>
          <a
            href="/cv/Richard_Nemeth_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">{t.hero.ctaResume}</Button>
          </a>
        </div>

        <HeroStats />
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center">
        <div className="w-[420px] aspect-square rounded-2xl bg-cover shadow-xl"
             style={{ backgroundImage: `url(${profileImg})` }} />
      </div>
    </section>
  );
}