import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      {/* Gradient Background Instead of Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/60 px-4 py-2 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Powered by babiceva.ai
          </span>
          <Sparkles className="h-4 w-4 text-primary" />
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          Generate{' '}
          <span className="text-primary">your</span>
          <br />
          AI Video
        </h1>

        {/* Subtitle */}
        <p className="mb-10 text-lg text-foreground-secondary md:text-xl">
          Transform your ideas into professional videos in seconds.
        </p>

        {/* CTA Button */}
        <Link
          href="/tools/video-generation"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-12 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:brightness-110 active:scale-95"
        >
          Start Now
        </Link>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}