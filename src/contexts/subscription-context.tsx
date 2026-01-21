'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useAuth } from './auth-context'
import { supabase } from '@/lib/supabase/client'
import type { SubscriptionTier } from '@/types/database'

interface SubscriptionContextType {
  tier: SubscriptionTier
  creditsRemaining: number
  loading: boolean
  refreshSubscription: () => Promise<void>
  canGenerate: boolean
  upgradeToPro: () => Promise<void>
  resetToFree: () => Promise<void>
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [tier, setTier] = useState<SubscriptionTier>('free')
  const [creditsRemaining, setCreditsRemaining] = useState(0)
  const [loading, setLoading] = useState(true)

  const refreshSubscription = async () => {
    if (!user) {
      setTier('free')
      setCreditsRemaining(0)
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('subscription_tier, credits_remaining')
        .eq('id', user.id)
        .single()

      if (error) throw error

      if (data) {
        setTier(data.subscription_tier as SubscriptionTier)
        setCreditsRemaining(data.credits_remaining)
      }
    } catch (error) {
      console.error('Error fetching subscription:', error)
    } finally {
      setLoading(false)
    }
  }

  const upgradeToPro = async () => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ 
          subscription_tier: 'pro',
          credits_remaining: 999 
        })
        .eq('id', user.id)

      if (error) throw error

      await refreshSubscription()
    } catch (error) {
      console.error('Error upgrading to pro:', error)
      throw error
    }
  }

  const resetToFree = async () => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ 
          subscription_tier: 'free',
          credits_remaining: 10 
        })
        .eq('id', user.id)

      if (error) throw error

      await refreshSubscription()
    } catch (error) {
      console.error('Error resetting to free:', error)
      throw error
    }
  }

  useEffect(() => {
    refreshSubscription()
  }, [user])

  const canGenerate = tier === 'pro' || creditsRemaining > 0

  const value = {
    tier,
    creditsRemaining,
    loading,
    refreshSubscription,
    canGenerate,
    upgradeToPro,
    resetToFree,
  }

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider')
  }
  return context
}