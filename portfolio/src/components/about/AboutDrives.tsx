import { useLang } from "../../../i18n/LanguageContext";
import DriveCard from "../common/DriveCard";

export default function AboutDrives() {
  const { t } = useLang();

  return (
    <section className="p-4 md:p-8 lg:p-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black">{t.about.drives.title}</h2>
        <p className="text-slate-500 mt-4">{t.about.drives.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 ">
        {t.about.drives.items.map((item: any, i: number) => (
          <DriveCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
