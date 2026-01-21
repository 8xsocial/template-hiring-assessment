import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function CheckEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-foreground">Check your email</h1>
          <p className="mt-4 text-muted-foreground">
            We've sent you a confirmation email. Please check your inbox and click the link to verify your account.
          </p>
        </div>

        <Button asChild className="w-full">
          <Link href="/auth/login">Return to Login</Link>
        </Button>
      </div>
    </div>
  )
}
