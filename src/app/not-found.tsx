import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { SearchX, Home } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="flex items-center justify-center px-4 py-16 min-h-[calc(100vh-80px)]">
        <div className="max-w-2xl w-full text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <SearchX className="w-24 h-24 text-primary relative" strokeWidth={1.5} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-7xl font-bold tracking-tight mb-4">404</h1>
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Page not found
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground font-light mb-12 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Button */}
          <Button size="lg" asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
