import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const supabase = await createClient()

  // Sign out on the server side - this properly clears cookies
  await supabase.auth.signOut()

  // Redirect to home page
  return NextResponse.redirect(new URL("/", request.url))
}
