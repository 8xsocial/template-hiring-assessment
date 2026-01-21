'use client'

import { useAuth } from '@/contexts/auth-context'
import { Image } from 'lucide-react'

export function ImageHistory() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="mt-16 rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-12 text-center">
        <Image className="h-12 w-12 text-foreground-tertiary mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground-secondary">
          Sign in to view your generated images
        </h3>
      </div>
    )
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-white mb-6">Image History</h3>
      <div className="rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-12 text-center">
        <p className="text-foreground-secondary">
          No images generated yet. Create your first image above!
        </p>
      </div>
    </div>
  )
}