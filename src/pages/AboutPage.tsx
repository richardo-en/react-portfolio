import AboutHero from "../components/about/AboutHero";
import AboutTimeline from "../components/about/AboutTimeline";
import AboutFavorites from "../components/about/AboutFavorites";
import AboutDrives from "../components/about/AboutDrives";


export default function AboutPage() {
  return (
    <main className="">
      {/* px-4 md:px-8 lg:px-16 */}
      <AboutHero />
      <AboutDrives />
      <AboutTimeline />
      <AboutFavorites />
    </main>
  );
}
