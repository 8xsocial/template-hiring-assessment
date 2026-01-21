import { Navigation } from '@/components/navigation'
import { PageBackground } from '@/components/page-background'
import { Footer } from '@/components/footer'
import { PersonReplacerForm } from '@/components/features/person-replacer/person-replacer-form'
import { PersonReplacerHistory } from '@/components/features/person-replacer/person-replacer-history'

export default function PersonReplacerPage() {
  return (
    <>
      <PageBackground />
      <div className="relative min-h-screen">
        <Navigation />
        
        <main className="pt-36 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                AI Person Replacer
              </h1>
              <p className="text-lg text-foreground-secondary">
                Replace people in videos with AI-powered person replacement technology.
              </p>
            </div>

            <PersonReplacerForm />
            <PersonReplacerHistory />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}