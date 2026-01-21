'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useSubscription } from '@/contexts/subscription-context'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Shirt, Upload } from 'lucide-react'

export function DressChangerForm() {
  const { user } = useAuth()
  const { creditsRemaining } = useSubscription()
  const router = useRouter()

  const handleChange = () => {
    if (!user) {
      router.push('/auth/signin')
      return
    }
    console.log('Change dress')
  }

  const creditsNeeded = 2
  const hasEnoughCredits = creditsRemaining >= creditsNeeded

  return (
    <div className="rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-6 md:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Shirt className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold text-white">AI Dress Changer</h2>
          </div>
          {user && (
            <div className="text-sm">
              <span className="text-foreground-secondary">Your Credits: </span>
              <span className={hasEnoughCredits ? 'text-white font-semibold' : 'text-red-500 font-semibold'}>
                {creditsRemaining}
              </span>
              <span className="text-foreground-secondary"> / {creditsNeeded} required</span>
            </div>
          )}
        </div>
        <p className="text-sm text-foreground-secondary">
          Transform clothing in any photo with AI precision
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Model Image */}
        <div>
          <Label className="mb-3 block text-white">Model Image</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <Upload className="h-8 w-8 text-foreground-tertiary mx-auto mb-2" />
            <p className="text-sm text-white mb-1">Drag and drop an image here, or click to select</p>
            <p className="text-xs text-foreground-tertiary">5MB size limit</p>
          </div>
        </div>

        {/* Garment Image */}
        <div>
          <Label className="mb-3 block text-white">Garment Image</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <Upload className="h-8 w-8 text-foreground-tertiary mx-auto mb-2" />
            <p className="text-sm text-white mb-1">Drag and drop an image here, or click to select</p>
            <p className="text-xs text-foreground-tertiary">5MB size limit</p>
          </div>
        </div>
      </div>

      {!hasEnoughCredits && user && (
        <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
          Insufficient credits. You have {creditsRemaining} credits but need {creditsNeeded} credits.
        </div>
      )}

      <Button 
        onClick={handleChange} 
        className="w-full" 
        size="lg"
        disabled={user && !hasEnoughCredits ? true : undefined}
      >
        {!user ? 'Sign in to change dress' : !hasEnoughCredits ? `Change Dress (Need ${creditsNeeded} Credits)` : 'Change Dress'}
      </Button>
    </div>
  )
}