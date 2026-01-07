const images = import.meta.glob(
  "@/static/images/projects/**/**/*.png",
  { eager: true, import: "default" }
) as Record<string, string>;

export const projectImageMap: Record<string, string> = {};

for (const path in images) {
  const fileName = path.split("/").pop()!;      
  const key = fileName.replace(".png", "");      
  projectImageMap[key] = images[path];
}