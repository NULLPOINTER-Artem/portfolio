// Components
import AboutSection from "@/components/AboutSection";

// export const dynamic = 'force-dynamic'; // use pure SSR

export default async function Home() {
  return (
    <main className="home-page">
      <AboutSection />
    </main>
  );
}
