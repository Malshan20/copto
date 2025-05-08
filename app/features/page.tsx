import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeaturesHero from "@/components/features-hero"
import FeaturesShowcase from "@/components/features-showcase"
import FeaturesComparison from "@/components/features-comparison"
import FeaturesFaq from "@/components/features-faq"
import FeaturesCta from "@/components/features-cta"

export const metadata: Metadata = {
  title: "Platform Features | Copto",
  description: "Explore the advanced features of Copto's crypto trading platform.",
}

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <FeaturesHero />
        <FeaturesShowcase />
        <FeaturesComparison />
        <FeaturesFaq />
        <FeaturesCta />
      </main>
      <Footer />
    </>
  )
}
