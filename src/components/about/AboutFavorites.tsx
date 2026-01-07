import { useLang } from "../../../i18n/LanguageContext";
import FavoriteItem from "../common/FavoriteItem";
import kayakImg from "../../static/images/kayak.jpg";

export default function AboutFavorites() {
  const { t } = useLang();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-24">
        <h2 className="text-2xl font-bold mb-12 text-center lg:text-left">
          {t.about.favorites.title}
        </h2>

        {/* WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT – Favorites */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 max-w-md mx-auto lg:mx-0">
            {t.about.favorites.items.map((item: any, i: number) => (
              <FavoriteItem
                key={i}
                title={item.title}
                description={item.description}
                icon={item.icon}
                colorClass={item.colorClass}
              />
            ))}
          </div>

          {/* RIGHT – Image */}
          <div className="relative group w-full max-w-md mx-auto">
            <img
              src={kayakImg}
              alt="Kayaking – personal activity"
              className="
                w-full
                rounded-2xl
                object-cover
                shadow-lg
                transition-all
                duration-500
                group-hover:scale-[1.02]
                group-hover:shadow-xl
              "
            />

            {/* subtle overlay on hover */}
            <div className="
              absolute inset-0
              rounded-2xl
              bg-black/10
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
            " />
          </div>

        </div>
      </div>
    </section>
  );
}
