"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles, ArrowRight } from "lucide-react"
import { useEffect } from "react"
import confetti from "@/lib/confetti"

export default function UpgradeSuccessPage() {
  useEffect(() => {
    // Trigger confetti on mount
    confetti()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center px-4 py-16 min-h-[calc(100vh-80px)]">
        <div className="max-w-2xl w-full text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
              <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Header */}
          <h1 className="text-5xl font-light tracking-tight mb-4">
            Welcome to <span className="font-semibold text-primary">Pro</span>!
          </h1>
          <p className="text-xl text-muted-foreground font-light mb-12">
            Your upgrade was successful. You now have access to all Pro features.
          </p>

          {/* Features unlocked */}
          <div className="bg-card/50 border border-border rounded-2xl p-8 mb-8 text-left">
            <h3 className="font-medium mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              What's now unlocked:
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                Unlimited access to all features
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                Priority support
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                Advanced analytics & insights
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                Early access to new features
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/profile">View Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
