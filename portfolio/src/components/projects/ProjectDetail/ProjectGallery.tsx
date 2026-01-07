type Props = {
  gallery: string[];
};

export default function ProjectGallery({ gallery }: Props) {
  if (!gallery?.length) return null;

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold">Project Gallery</h2>
          <span className="h-px flex-1 bg-gray-200 ml-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Mobile hero image */}
          <div className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[9/16] md:row-span-2">
            <img
              src={gallery[0]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-bold">Mobile View</p>
                <p className="text-gray-300 text-sm">Primary mobile layout</p>
              </div>
            </div>
          </div>

          {/* Remaining images */}
          {gallery.slice(1).map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-video"
            >
              <img
                src={img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
