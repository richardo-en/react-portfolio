export default function ProjectSidebar({ project }: any) {
  return (
    <aside className="lg:col-span-4 lg:col-start-9 lg:row-start-1 order-1 lg:order-2">
      <div className="sticky top-24 flex flex-col gap-8 rounded-2xl border bg-background-light p-6 shadow-sm">

        {/* DETAILS */}
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">info</span>
            Project Details
          </h3>

          <div className="flex flex-col divide-y">
            {project.details.map((d: any, i: number) => (
              <div key={i} className="flex justify-between py-3 text-sm">
                <span className="text-gray-500">{d.label}</span>
                <span className="font-medium text-right">{d.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TECH STACK */}
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">code</span>
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string, i: number) => (
              <span
                key={i}
                className="inline-flex items-center rounded-md bg-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}
