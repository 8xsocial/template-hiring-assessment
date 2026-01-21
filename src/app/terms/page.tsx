"use client"

import { Navigation } from "@/components/navigation"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Terms of <span className="italic">Service</span>
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
              This is a demo template for frontend engineering assessments. These terms are placeholder
              content and would be replaced with actual legal terms in a production application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-light tracking-tight mb-4">User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To access certain features, you must create an account. You agree to:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="leading-relaxed">Provide accurate registration information</li>
              <li className="leading-relaxed">Maintain the security of your password</li>
              <li className="leading-relaxed">Be responsible for all activities under your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-light tracking-tight mb-4">Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="leading-relaxed">Use the service for any illegal purpose</li>
              <li className="leading-relaxed">Attempt to circumvent security measures</li>
              <li className="leading-relaxed">Interfere with or disrupt the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-light tracking-tight mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions about these terms can be directed to the repository maintainer.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
