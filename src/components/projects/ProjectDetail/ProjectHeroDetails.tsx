export default function ProjectHeroDetails({ project }: any) {
  return (
    <section className="relative pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:items-center">

        {/* TEXT */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          {/* Status badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border bg-white px-3 py-1">
            <span className={`h-2 w-2 rounded-full ${project.status[1] == true ? "bg-green-500" : "bg-red-500"} animate-pulse`} />
            <span className="text-xs font-medium uppercase tracking-wider text-gray-600">
              {project.status[0]}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            {project.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              {project.title.split(" ").slice(-1)}
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="h-12 px-6 flex items-center gap-2 rounded-lg border font-bold transition hover:shadow-lg active:scale-95"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="lg:w-1/2 relative group">
          {/* glow */}
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-blue-400 opacity-20 blur-2xl group-hover:opacity-40 transition duration-700" />

          <div className="relative rounded-xl overflow-hidden bg-gray-100 shadow-2xl ring-1 ring-black/5">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
