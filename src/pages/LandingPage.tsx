import HeroSection from "../components/hero/HeroSection.tsx";
import TrustedBy from "../components/landingPage/TrustedBy.tsx";

export default function LandingPage() {
  return (
    <>
      <main className="px-4 md:px-10 lg:px-40">
        <HeroSection />
        <TrustedBy />
      </main>
    </>
  );
}