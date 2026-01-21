'use client'

import { useAuth } from '@/contexts/auth-context'
import { UserIcon } from 'lucide-react'

export function PersonReplacerHistory() {
  const { user } = useAuth()

  return (
    <div className="mt-16 rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-12 text-center">
      <UserIcon className="h-12 w-12 text-foreground-tertiary mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">Person Replacer History</h3>
      <p className="text-foreground-secondary">
        {user ? 'No person replacer videos yet. Start by creating your first one!' : 'Sign in to view your history'}
      </p>
    </div>
  )
}