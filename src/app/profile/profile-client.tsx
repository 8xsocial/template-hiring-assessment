"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { CreditCard, LogOut, Trash2, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useSubscription } from "@/contexts/subscription-context"
import { toast } from "sonner"

interface ProfileClientProps {
  user: {
    id: string
    email: string
  }
  profile: any | null
}

export function ProfileClient({ user, profile }: ProfileClientProps) {
  const { isPro, tier, downgradeToFree, refresh } = useSubscription()
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [isDowngrading, setIsDowngrading] = useState(false)
  const [showDowngradeDialog, setShowDowngradeDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const handleLogout = async () => {
    if (isLoggingOut) return
    setIsLoggingOut(true)

    try {
      await fetch("/api/auth/signout", { method: "POST" })
    } catch (error) {
      console.error("Logout error:", error)
    }

    window.location.href = "/"
  }

  const handleDeleteAccount = async () => {
    setIsDeleting(true)

    try {
      const response = await fetch("/api/account/delete", {
        method: "POST",
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to delete account")
      }

      setShowDeleteDialog(false)
      window.location.href = "/"
    } catch (error) {
      console.error("Delete account error:", error)
      toast.error("Failed to delete account. Please try again.")
      setIsDeleting(false)
      setShowDeleteDialog(false)
    }
  }

  const handleDowngrade = async () => {
    setIsDowngrading(true)

    try {
      await downgradeToFree()
      setShowDowngradeDialog(false)
      toast.success("You've been downgraded to the Free plan.")
    } catch (error) {
      console.error("Downgrade error:", error)
      toast.error("Failed to downgrade. Please try again.")
    } finally {
      setIsDowngrading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Profile Header */}
          <div>
            <h1 className="text-4xl font-bold mb-2">Your Profile</h1>
            <p className="text-muted-foreground">{user.email}</p>
          </div>

          {/* Subscription Management */}
          <Card className="bg-card border-border/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-semibold">Subscription</h2>
            </div>

            {isPro ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-border/50">
                  <div>
                    <p className="font-medium">Current Plan</p>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Pro Plan
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="text-sm font-medium text-green-500">Active</p>
                  </div>
                </div>

                <AlertDialog open={showDowngradeDialog} onOpenChange={setShowDowngradeDialog}>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm" className="text-muted-foreground" disabled={isDowngrading}>
                      Downgrade to Free
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Downgrade to Free?</AlertDialogTitle>
                      <AlertDialogDescription>
                        You'll lose access to Pro features immediately. You can upgrade again anytime.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel disabled={isDowngrading}>Keep Pro</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={(e) => {
                          e.preventDefault()
                          handleDowngrade()
                        }}
                        disabled={isDowngrading}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        {isDowngrading ? "Downgrading..." : "Confirm Downgrade"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-border/50">
                  <div>
                    <p className="font-medium">Current Plan</p>
                    <p className="text-sm text-muted-foreground mt-1">Free</p>
                  </div>
                  <Link href="/upgrade">
                    <Button variant="outline">Upgrade to Pro</Button>
                  </Link>
                </div>
              </div>
            )}
          </Card>

          {/* Account Actions */}
          <Card className="bg-card border-border/50 p-8">
            <h2 className="text-2xl font-semibold mb-6">Account Actions</h2>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start text-foreground bg-transparent"
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                <LogOut className="w-4 h-4 mr-3" />
                {isLoggingOut ? "Signing out..." : "Sign Out"}
              </Button>

              <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 bg-transparent"
                    disabled={isDeleting}
                  >
                    <Trash2 className="w-4 h-4 mr-3" />
                    Delete Account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Account?</AlertDialogTitle>
                    <AlertDialogDescription className="space-y-2">
                      <p>This action is permanent and cannot be undone.</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Your profile will be permanently deleted</li>
                        <li>Your subscription data will be removed</li>
                        <li>You won't be able to recover your account</li>
                      </ul>
                      <p className="font-semibold text-destructive pt-2">
                        This action cannot be undone.
                      </p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel disabled={isDeleting}>Keep Account</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={(e) => {
                        e.preventDefault()
                        handleDeleteAccount()
                      }}
                      disabled={isDeleting}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      {isDeleting ? "Deleting..." : "Delete Account"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
