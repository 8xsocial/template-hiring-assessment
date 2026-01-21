import { Navigation } from '@/components/navigation'
import { PageBackground } from '@/components/page-background'
import { Footer } from '@/components/footer'
import { ImageGenerationForm } from '@/components/features/image-generation/image-generation-form'
import { ImagePreview } from '@/components/features/image-generation/image-preview'
import { ImageHistory } from '@/components/features/image-generation/image-history'

export default function ImageGeneratorPage() {
  return (
    <>
      <PageBackground />
      <div className="relative min-h-screen">
        <Navigation />
        
        <main className="pt-36 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Image Generator
              </h1>
              <p className="text-lg text-foreground-secondary">
                Generate photorealistic images from text descriptions using advanced AI models.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ImageGenerationForm />
              <ImagePreview />
            </div>

            <ImageHistory />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}