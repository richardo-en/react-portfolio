import { useLang } from "../../../i18n/LanguageContext";

export default function HeroStats() {
  const { t } = useLang();

  return (
    <div className="flex gap-8 pt-8 border-t">
      {t.hero.stats.map(s => (
        <div key={s.label}>
          <p className="text-3xl font-bold">{s.value}</p>
          <p className="text-sm text-slate-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
