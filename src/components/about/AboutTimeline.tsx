import { useLang } from "../../../i18n/LanguageContext";
import TimelineItem from "../common/TimelineItem";

export default function AboutTimeline() {
  const { t } = useLang();

  return (
    <section className="p-4 md:p-8 lg:p-16 bg-background-light">
      <h2 className="text-3xl font-black mb-16">
        {t.about.timeline.title}
      </h2>

      <div className="space-y-10">
        {t.about.timeline.items.map((item: any, i: number) => (
          <TimelineItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
