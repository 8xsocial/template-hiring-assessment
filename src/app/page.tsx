import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/home/hero-section'
import { ExampleGallery } from '@/components/home/example-gallery'
import { ProfessionalTips } from '@/components/home/professional-tips'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Padding for two-row nav: 80px (row1) + 56px (row2) = 136px ~ pt-36 */}
      <div className="pt-36">
        <HeroSection />
        <ExampleGallery />
        <ProfessionalTips />
      </div>
      
      <Footer />
    </div>
  )
}
