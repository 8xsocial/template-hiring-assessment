import { SignUpForm } from '@/components/features/auth/sign-up-form'
import { PageBackground } from '@/components/page-background'

export default function SignUpPage() {
  return (
    <>
      <PageBackground />
      <div className="flex min-h-screen items-center justify-center px-4">
        <SignUpForm />
      </div>
    </>
  )
}