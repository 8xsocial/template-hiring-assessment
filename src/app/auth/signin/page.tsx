import { SignInForm } from '@/components/features/auth/sign-in-form'
import { PageBackground } from '@/components/page-background'

export default function SignInPage() {
  return (
    <>
      <PageBackground />
      <div className="flex min-h-screen items-center justify-center px-4">
        <SignInForm />
      </div>
    </>
  )
}