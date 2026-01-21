import { supabase } from './client'
import type { User } from '@supabase/supabase-js'

export interface SignUpData {
  email: string
  password: string
  fullName: string
}

export interface SignInData {
  email: string
  password: string
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthError'
  }
}

/**
 * Sign up a new user
 */
export async function signUp({ email, password, fullName }: SignUpData) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (error) throw new AuthError(error.message)
    if (!data.user) throw new AuthError('Failed to create user')

    return { user: data.user, session: data.session }
  } catch (error) {
    if (error instanceof AuthError) throw error
    throw new AuthError('An unexpected error occurred during sign up')
  }
}

/**
 * Sign in an existing user
 */
export async function signIn({ email, password }: SignInData) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw new AuthError(error.message)
    if (!data.user) throw new AuthError('Invalid credentials')

    return { user: data.user, session: data.session }
  } catch (error) {
    if (error instanceof AuthError) throw error
    throw new AuthError('An unexpected error occurred during sign in')
  }
}

/**
 * Sign out the current user
 */
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw new AuthError(error.message)
  } catch (error) {
    if (error instanceof AuthError) throw error
    throw new AuthError('An unexpected error occurred during sign out')
  }
}

/**
 * Get the current user session
 */
export async function getSession() {
  try {
    const { data, error } = await supabase.auth.getSession()
    if (error) throw new AuthError(error.message)
    return data.session
  } catch (error) {
    if (error instanceof AuthError) throw error
    throw new AuthError('Failed to get session')
  }
}

/**
 * Get the current user
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data, error } = await supabase.auth.getUser()
    if (error) throw new AuthError(error.message)
    return data.user
  } catch (error) {
    return null
  }
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession()
  return !!session
}