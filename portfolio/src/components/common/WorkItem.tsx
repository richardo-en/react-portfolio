import { useLang } from "../../../i18n/LanguageContext";

type Props = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
  skills?: string[];
  isLast?: boolean;
};

export default function WorkItem({
  title,
  company,
  period,
  description,
  achievements = [],
  skills = [],
  isLast,
}: Props) {
    const { t } = useLang();

  return (
    <div className="relative pl-10">
      {/* timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary" />
      {!isLast && <div className="absolute left-[5px] top-6 w-px h-full bg-slate-200" />}

      <div className="bg-white border rounded-xl p-6 shadow-sm space-y-4">
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-primary text-sm">{company}</p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
            {period}
          </span>
        </div>

        <p className="text-slate-500">{description}</p>

        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">{t.work.timeline.keyAchievments}</h4>


        {achievements.length > 0 && (
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        )}

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            {skills.map((s, i) => (
              <span key={i} className="px-3 py-1 text-xs rounded bg-slate-100">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
