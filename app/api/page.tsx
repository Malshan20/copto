import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ApiHero from "@/components/api-hero"
import ApiEndpoints from "@/components/api-endpoints"
import ApiAuthentication from "@/components/api-authentication"
import ApiPricing from "@/components/api-pricing"

export default function ApiPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-black z-0 opacity-20"></div>
      <div className="relative z-10">
        <Navbar />
        <ApiHero />
        <ApiAuthentication />
        <ApiEndpoints />
        <ApiPricing />
        <Footer />
      </div>
    </main>
  )
}
