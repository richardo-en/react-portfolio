export default function ProjectContent({ project }: any) {
  return (
    <div className="lg:col-span-8 space-y-12">
      {project.sections.map((section: any, i: number) => (
        <div key={i}>
          <h2 className="text-2xl font-bold mb-4">
            {section.title}
          </h2>
          {section.text.map((p: string, j: number) => (
            <p key={j} className="text-gray-600 mb-4">
              {p}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
