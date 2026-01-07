import { useLang } from "../../../i18n/LanguageContext";
import profileImg from "../../static/images/personal_image_optimized.jpg";
import { Link } from "react-router-dom";

export default function AboutHero() {
  const { t } = useLang();

  return (
    <section className="bg-background-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
              {t.about.hero.badge}
            </span>

            <h1 className="text-5xl font-black leading-tight">
              {t.about.hero.title}
            </h1>

            <p className="text-slate-500 max-w-xl">
              {t.about.hero.subtitle}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div
              className="w-[420px] aspect-square rounded-2xl bg-cover bg-center shadow-xl"
              style={{ backgroundImage: `url(${profileImg})` }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
