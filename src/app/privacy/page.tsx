"use client"

import { Navigation } from "@/components/navigation"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Privacy <span className="italic">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-3xl font-light tracking-tight mb-4">Demo Template</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is a demo template for frontend engineering assessments. This privacy policy is
              placeholder content and would be replaced with actual privacy terms in a production application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-light tracking-tight mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In this demo, we collect:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="leading-relaxed">
                <strong className="text-foreground">Account Information:</strong> Email and password for authentication
              </li>
              <li className="leading-relaxed">
                <strong className="text-foreground">Subscription Data:</strong> Your selected tier (free/pro)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-light tracking-tight mb-4">Data Storage</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All data is stored locally in your Supabase instance. In this demo environment, data is
              stored in a local PostgreSQL database running via Docker.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-light tracking-tight mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="leading-relaxed">Access your account data via your profile</li>
              <li className="leading-relaxed">Delete your account at any time</li>
              <li className="leading-relaxed">Export your data (in a production app)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-light tracking-tight mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about this policy can be directed to the repository maintainer.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
