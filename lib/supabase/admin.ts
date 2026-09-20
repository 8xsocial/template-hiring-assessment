import "server-only"

import { createClient } from "@supabase/supabase-js"

// Admin client with service role/secret key for privileged operations
// WARNING: This should ONLY be used in server-side code, never exposed to client
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  // SUPABASE_SECRET_KEY is the current name. The legacy SUPABASE_SERVICE_ROLE_KEY
  // fallback goes once every host that runs this has the new variable.
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error("Missing Supabase URL or Secret Key (set SUPABASE_SECRET_KEY or SUPABASE_SERVICE_ROLE_KEY)")
  }

  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
