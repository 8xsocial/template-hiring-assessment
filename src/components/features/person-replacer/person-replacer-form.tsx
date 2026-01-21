'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useSubscription } from '@/contexts/subscription-context'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Upload } from 'lucide-react'

export function PersonReplacerForm() {
  const { user } = useAuth()
  const { creditsRemaining } = useSubscription()
  const router = useRouter()

  const creditsNeeded = 10
  const hasEnoughCredits = creditsRemaining >= creditsNeeded

  return (
    <div className="rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-2">
          AI Person Replacer
        </h2>
        <p className="text-foreground-secondary">
          Upload a person image and a video to replace people in the video with your uploaded person.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Person Image */}
        <div>
          <Label className="mb-3 block text-white">Upload Person Image</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <Upload className="h-10 w-10 text-foreground-tertiary mx-auto mb-3" />
            <p className="text-sm text-white mb-1">
              Drag and drop an image here, or click to select
            </p>
            <p className="text-xs text-foreground-tertiary">5MB size limit</p>
          </div>
          <p className="mt-2 text-xs text-foreground-tertiary">
            Upload a clear photo of the person you want to place in the video
          </p>
        </div>

        {/* Video Upload */}
        <div>
          <Label className="mb-3 block text-white">Upload Video</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <Upload className="h-10 w-10 text-foreground-tertiary mx-auto mb-3" />
            <p className="text-sm text-white mb-1">Click to upload video</p>
            <p className="text-xs text-foreground-tertiary">Max duration: 10 seconds</p>
          </div>
          <p className="mt-2 text-xs text-foreground-tertiary">
            Upload a video with a person to replace (max 10 seconds)
          </p>
        </div>
      </div>

      {!hasEnoughCredits && user && (
        <div className="mb-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 p-4 text-sm text-yellow-400">
          Not enough credits ({creditsNeeded} required)
        </div>
      )}

      <Button
        onClick={() => !user && router.push('/auth/signin')}
        className="w-full"
        size="lg"
        disabled={!!user && !hasEnoughCredits}
      >
        {!user
          ? 'Sign in to replace person'
          : !hasEnoughCredits
          ? `Not enough credits (${creditsNeeded} required)`
          : 'Replace Person'}
      </Button>
    </div>
  )
}
