import { getSupabaseServer } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Profile } from '@/types'

export default async function DashboardPage() {
  const supabase = await getSupabaseServer()
  
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/signin')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single<Profile>()

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="mt-6 rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">Welcome, {profile?.full_name}!</h2>
          <p className="mt-2 text-gray-600">Email: {user.email}</p>
          <p className="mt-1 text-gray-600">
            Subscription: <span className="font-medium">{profile?.subscription_tier}</span>
          </p>
          <p className="mt-1 text-gray-600">
            Credits Remaining: <span className="font-medium">{profile?.credits_remaining}</span>
          </p>
        </div>
      </div>
    </div>
  )
}