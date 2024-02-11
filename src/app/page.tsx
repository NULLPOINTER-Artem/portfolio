// Components
import AboutSection from "@/components/AboutSection";
import InterestList from "@/components/InterestList";
import TechStuckList from "@/components/TechStuckList";

// export const dynamic = 'force-dynamic'; // use pure SSR

export default async function Home() {
  return (
    <main className="home-page">
      <AboutSection />
      <InterestList />
      <TechStuckList />
    </main>
  );
}
