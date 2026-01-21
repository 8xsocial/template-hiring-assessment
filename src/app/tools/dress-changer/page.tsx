import { Navigation } from '@/components/navigation'
import { PageBackground } from '@/components/page-background'
import { Footer } from '@/components/footer'
import { DressChangerForm } from '@/components/features/dress-changer/dress-changer-form'
import { DressChangerExamples } from '@/components/features/dress-changer/dress-changer-examples'

export default function DressChangerPage() {
  return (
    <>
      <PageBackground />
      <div className="relative min-h-screen">
        <Navigation />
        
        <main className="pt-36 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                AI Dress Changer
              </h1>
              <p className="text-lg text-foreground-secondary">
                Transform clothing in photos instantly with AI-powered dress changing technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <DressChangerForm />
              <DressChangerExamples />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}