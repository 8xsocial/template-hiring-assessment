'use client'

import { useAuth } from '@/contexts/auth-context'
import { useSubscription } from '@/contexts/subscription-context'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'

const plans = [
  {
    name: 'Starter',
    price: '€19.90',
    credits: '60 credits/month',
    features: [
      '6 AI video generations per month',
      '60 AI image generations per month',
      '30 dress changes per month',
    ],
  },
  {
    name: 'Pro',
    price: '€39.90',
    credits: '180 credits/month',
    popular: true,
    features: [
      '18 AI video generations per month',
      '180 AI image generations per month',
      '90 dress changes per month',
    ],
  },
  {
    name: 'Business',
    price: '€79.90',
    credits: '420 credits/month',
    features: [
      '42 AI video generations per month',
      '420 AI image generations per month',
      '210 dress changes per month',
    ],
  },
]

export function PricingCards() {
  const { user } = useAuth()
  const { tier, upgradeToPro } = useSubscription()
  const router = useRouter()

  const handleSubscribe = async (planName: string) => {
    if (!user) {
      router.push('/auth/signin')
      return
    }

    if (planName === 'Pro') {
      try {
        await upgradeToPro()
        alert('Upgraded to Pro!')
      } catch (error) {
        console.error('Error upgrading:', error)
      }
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl p-8 ${
            plan.popular
              ? 'bg-background-secondary border-2 border-primary'
              : 'bg-background-secondary/60 border border-border'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-primary px-4 py-1 rounded-full flex items-center gap-1">
                <span className="text-sm font-semibold text-black">👑 Most Popular</span>
              </div>
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-primary mb-2">{plan.price}<span className="text-lg text-foreground-secondary">/mo</span></div>
            <p className="text-foreground-secondary">{plan.credits}</p>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            onClick={() => handleSubscribe(plan.name)}
            className="w-full"
            variant={plan.name === 'Pro' && tier === 'pro' ? 'outline' : 'default'}
          >
            {plan.name === 'Pro' && tier === 'pro' ? 'Current Plan' : 'Subscribe'}
          </Button>
        </div>
      ))}
    </div>
  )
}