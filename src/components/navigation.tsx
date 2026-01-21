'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronDown, Video, Image, Shirt, Car, User as UserIcon, Globe, LogOut, Settings as SettingsIcon } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { useSubscription } from '@/contexts/subscription-context'
import { cn } from '@/lib/utils'

const aiTools = [
  { name: 'Video Generation', href: '/tools/video-generation', icon: Video },
  { name: 'Image Generator', href: '/tools/image-generator', icon: Image },
  { name: 'AI Dress Changer', href: '/tools/dress-changer', icon: Shirt },
  { name: 'AI Car Changer', href: '/tools/car-changer', icon: Car, disabled: true },
  { name: 'AI Person Replacer', href: '/tools/person-replacer', icon: UserIcon },
]

export function Navigation() {
  const { user, signOut } = useAuth()
  const { creditsRemaining } = useSubscription()
  const pathname = usePathname()
  const [isToolsOpen, setIsToolsOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md">
      {/* ROW 1: Logo + User Info */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Video className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <span className="text-2xl font-bold text-white">
                Babičeva AI
              </span>
            </Link>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {user ? (
                <>
                  {/* Credits Badge */}
                  <div className="flex items-center gap-2 rounded-full bg-background-secondary px-4 py-2.5">
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                    <span className="text-sm font-semibold text-white">
                      {creditsRemaining} Credits
                    </span>
                  </div>

                  {/* Settings */}
                  <Link
                    href="/settings"
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                  >
                    <SettingsIcon className="h-5 w-5" />
                    <span className="hidden sm:inline text-sm font-medium">Settings</span>
                  </Link>

                  {/* User Profile Circle */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <span className="text-sm font-bold text-black uppercase">
                      {user.email?.[0] || 'U'}
                    </span>
                  </div>

                  {/* User Name */}
                  <span className="hidden md:block text-sm font-medium text-white">
                    {user.email?.split('@')[0] || 'User'}
                  </span>

                  {/* Globe Icon */}
                  <button className="text-white hover:text-primary transition-colors">
                    <Globe className="h-5 w-5" />
                  </button>

                  {/* Sign Out */}
                  <button
                    onClick={() => signOut()}
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span className="hidden sm:inline text-sm font-medium">Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  {/* Globe Icon */}
                  <button className="text-white hover:text-primary transition-colors">
                    <Globe className="h-5 w-5" />
                  </button>

                  {/* Sign In Button */}
                  <Link
                    href="/auth/signin"
                    className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-black transition-all hover:brightness-110"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                    </svg>
                    Sign in with Google
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2: Main Navigation Buttons */}
      <div className="bg-black/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start gap-2 py-3">
            {/* Home Button */}
            <Link
              href="/"
              className={cn(
                'flex items-center gap-2 rounded-full px-10 py-3 text-sm font-medium transition-all',
                isActive('/')
                  ? 'bg-primary text-black'
                  : 'text-white hover:bg-white/10'
              )}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>

            {/* AI Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className={cn(
                  'flex items-center gap-2 rounded-full px-10 py-3 text-sm font-medium transition-all',
                  isToolsOpen || pathname.startsWith('/tools')
                    ? 'bg-primary text-black'
                    : 'text-white hover:bg-white/10'
                )}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                AI Tools
                <ChevronDown className={cn('h-4 w-4 transition-transform', isToolsOpen && 'rotate-180')} />
              </button>

              {/* Dropdown Menu */}
              {isToolsOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsToolsOpen(false)}
                  />
                  
                  {/* Dropdown Panel */}
                  <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-white/10 bg-background-secondary/95 backdrop-blur-lg p-2 shadow-2xl">
                    {aiTools.map((tool) => {
                      const Icon = tool.icon
                      const isToolActive = pathname === tool.href
                      
                      if (tool.disabled) {
                        return (
                          <div
                            key={tool.name}
                            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-foreground-tertiary cursor-not-allowed opacity-50"
                          >
                            <Icon className="h-5 w-5" />
                            <span className="flex-1">{tool.name}</span>
                            <span className="text-xs">(Soon)</span>
                          </div>
                        )
                      }

                      return (
                        <Link
                          key={tool.name}
                          href={tool.href}
                          onClick={() => setIsToolsOpen(false)}
                          className={cn(
                            'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all',
                            isToolActive
                              ? 'bg-primary text-black'
                              : 'text-white hover:bg-white/10'
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          {tool.name}
                        </Link>
                      )
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Pricing Button */}
            <Link
              href="/pricing"
              className={cn(
                'rounded-full px-10 py-3 text-sm font-medium transition-all',
                isActive('/pricing')
                  ? 'bg-primary text-black'
                  : 'text-white hover:bg-white/10'
              )}
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}