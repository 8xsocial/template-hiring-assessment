'use client'

import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'

const topups = [
  {
    name: 'Starter Pack',
    price: '€44.90',
    credits: '100 credits',
    features: [
      'One-time purchase',
      '10 AI video generations',
      '100 AI image generations',
      '50 dress changes',
    ],
  },
  {
    name: 'Value Pack',
    price: '€64.90',
    credits: '200 credits',
    features: [
      'One-time purchase',
      '20 AI video generations',
      '200 AI image generations',
      '100 dress changes',
    ],
  },
  {
    name: 'Pro Pack',
    price: '€74.90',
    credits: '300 credits',
    features: [
      'One-time purchase',
      '30 AI video generations',
      '300 AI image generations',
      '150 dress changes',
    ],
  },
]

export function CreditTopups() {
  const { user } = useAuth()
  const router = useRouter()

  return (
    <>
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Credit Top-ups
        </h2>
        <p className="text-lg text-foreground-secondary">
          Buy additional credits when you need them
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topups.map((topup) => (
          <div
            key={topup.name}
            className="rounded-2xl bg-background-secondary/60 border border-border p-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{topup.name}</h3>
              <div className="text-4xl font-bold text-primary mb-2">{topup.price}</div>
              <p className="text-foreground-secondary">{topup.credits}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {topup.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => !user && router.push('/auth/signin')}
              className="w-full"
              variant="secondary"
            >
              Buy Credits
            </Button>
          </div>
        ))}
      </div>
    </>
  )
}