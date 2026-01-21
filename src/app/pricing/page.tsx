import { Navigation } from '@/components/navigation'
import { PageBackground } from '@/components/page-background'
import { Footer } from '@/components/footer'
import { PricingCards } from '@/components/pricing/pricing-cards'
import { CreditTopups } from '@/components/pricing/credit-topups'

export default function PricingPage() {
  return (
    <>
      <PageBackground />
      <div className="relative min-h-screen">
        <Navigation />
        
        <main className="pt-36 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h1 className="text-5xl font-bold text-white mb-4">
                Subscription Plans
              </h1>
              <p className="text-lg text-foreground-secondary">
                Choose a monthly plan that fits your needs
              </p>
            </div>

            <PricingCards />
            <CreditTopups />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}