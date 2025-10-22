import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WhySection from "@/components/why-section"
import ConceptSection from "@/components/concept-section"
import GraphicsSection from "@/components/graphics-section"
import VideoSection from "@/components/video-section"
import TestimonialsSection from "@/components/testimonials-section"
import ResearchSection from "@/components/research-section"
import BookSection from "@/components/book-section"
import TypesSection from "@/components/types-section"
import HowToHandleSection from "@/components/how-to-handle-section"
import TeamSection from "@/components/team-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhySection />
        <ConceptSection />
        <ResearchSection />
        <TypesSection />
        <HowToHandleSection />
        <BookSection />
        <GraphicsSection />
        <VideoSection />
        <TestimonialsSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
