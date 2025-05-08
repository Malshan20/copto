import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TermsOfServiceContent from "@/components/terms-of-service-content"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-black z-0 opacity-20"></div>
      <div className="relative z-10">
        <Navbar />
        <TermsOfServiceContent />
        <Footer />
      </div>
    </main>
  )
}
