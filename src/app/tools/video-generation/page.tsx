import { Navigation } from '@/components/navigation'
import { PageBackground } from '@/components/page-background'
import { Footer } from '@/components/footer'
import { VideoGenerationForm } from '@/components/features/video-generation/video-generation-form'
import { VideoPreview } from '@/components/features/video-generation/video-preview'
import { VideoHistory } from '@/components/features/video-generation/video-history'

export default function VideoGenerationPage() {
  return (
    <>
      <PageBackground />
      <div className="relative min-h-screen">
        <Navigation />
        
        <main className="pt-36 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Video Generation
              </h1>
              <p className="text-lg text-foreground-secondary">
                Create stunning videos from text prompts or transform your images into dynamic video content.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Form */}
              <VideoGenerationForm />

              {/* Right: Preview */}
              <VideoPreview />
            </div>

            {/* History Section */}
            <VideoHistory />
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}