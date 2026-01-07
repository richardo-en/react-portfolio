import { useLang } from "../../../i18n/LanguageContext";

type Props = {
  filters: any[];
  activeFilter: string;
  onChange: (value: string) => void;
};

export default function ProjectsFilters({
  filters,
  activeFilter,
  onChange,
}: Props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex gap-3 flex-wrap">
        {filters.map((filter, i) => (
          <button
            key={i}
            onClick={() => onChange(filter.value)}
            className={`px-4 py-2 rounded-full border text-sm font-medium ${
              activeFilter === filter.value
                ? "bg-primary text-white"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </section>
  );
}

