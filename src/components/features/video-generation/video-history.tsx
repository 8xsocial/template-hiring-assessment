'use client'

import { useAuth } from '@/contexts/auth-context'
import { Video } from 'lucide-react'

export function VideoHistory() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="mt-16 rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-12 text-center">
        <Video className="h-12 w-12 text-foreground-tertiary mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground-secondary mb-2">
          Sign in to view your video history
        </h3>
      </div>
    )
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-white mb-6">Your Video History</h3>
      <div className="rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-12 text-center">
        <p className="text-foreground-secondary">
          No videos generated yet. Create your first video above!
        </p>
      </div>
    </div>
  )
}