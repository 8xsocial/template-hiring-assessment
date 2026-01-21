#  Babiceva.ai Clone - FullStack Internship Assignment

A production-ready clone of **babiceva.ai**, built with **Next.js, Supabase, and Tailwind CSS**.  
The app allows users to sign up, authenticate, explore AI tools, and generate AI content (mocked), with subscription-based feature gating.

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+)
- [pnpm](https://pnpm.io/) (or npm/yarn)
- [Docker](https://www.docker.com/) (for local Supabase)
- [Supabase CLI](https://supabase.com/docs/guides/cli)

### Setup

1. **Clone the repository**
  
   git clone <repo-url>
   cd 8x-hiring-template


2. **Install dependencies**

   
   pnpm install
   

3. **Start local Supabase**

   
   # If you have another Supabase project running, stop it first:
   # supabase stop --project-id <other-project>

   supabase start
   

   This will output your local credentials (note: this project uses custom ports):

  
   API URL: http://127.0.0.1:54521
   Publishable key: sb_publishable_...
   Secret key: sb_secret_...
   

   Migrations are applied automatically during startup.

4. **Configure environment**

  
   cp .env.example .env.local
   

   Then edit `.env.local` with the keys from step 3:

  
   NEXT_PUBLIC_SUPABASE_URL="http://127.0.0.1:54521"
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="<your-publishable-key>"
   SUPABASE_SERVICE_ROLE_KEY="<your-secret-key>"
   

5. **Start development server**

   
   pnpm dev
   

6. **Open** [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **UI**: React 19 + Tailwind CSS + Shadcn/ui
* **Database**: Supabase (PostgreSQL)
* **Auth**: Supabase Auth (email/password)

---

## Features

* User authentication (sign up, sign in, sign out)
* Protected routes
* Subscription tiers (Free / Pro)
* Profile management
* Account deletion
* Responsive design
* Dark mode support
* Mocked AI generation tool (video/image)
* Feature gating based on subscription tier

---

## Project Structure


├── app/                    # Next.js App Router pages
│   ├── api/                # API routes
│   ├── auth/               # Auth pages (login, signup)
│   ├── profile/            # User profile
│   └── upgrade/            # Subscription upgrade flow
├── components/             # Reusable UI components
├── contexts/               # React Context providers
├── lib/                    # Utilities and Supabase clients
└── supabase/               # Database migrations


---

## Useful Commands

pnpm dev          # Start development server
pnpm build        # Build for production
pnpm lint         # Run ESLint
supabase start    # Start local Supabase (applies migrations)
supabase stop     # Stop local Supabase
supabase studio   # Open Supabase Studio (local admin UI)


---

## Database Schema

The template uses a simple `subscriptions` table:


CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  tier TEXT CHECK (tier IN ('free', 'pro')),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


Additional tables include:

* `profiles` (extends auth.users, tracks subscription tier & usage)
* `generations` (stores AI generation requests, status, metadata)

---

## Manual Testing Checklist

* [ ] Sign up with a new account
* [ ] Sign in with existing account
* [ ] Access protected routes
* [ ] Generate content as free user
* [ ] Upgrade to Pro
* [ ] Access Pro-only features
* [ ] Sign out

---

## Challenges & Solutions

### Docker Not Running

* **Issue:** `supabase start` failed
* **Solution:** Started Docker Desktop before running the command

### Port Conflict

* **Issue:** Port already in use
* **Solution:** Stopped conflicting service

### Infinite Auth Redirect

* **Issue:** Middleware caused redirect loop
* **Solution:** Fixed route matching and auth checks

### Profile Not Created

* **Issue:** Missing profile on signup
* **Solution:** Verified and fixed database trigger

---

## What I’d Improve With More Time

* Real AI integration (video/image generation)
* Upload support with Supabase Storage
* Real-time generation progress
* Usage analytics dashboard
* Automated tests (Playwright)

---

## Loom Walkthrough 🎥
**Project Walkthrough Video:**
 https://www.loom.com/share/58f728f47f68434b8eff93b01a3f0238

The video covers:

1. Live demo of the application
2. Code walkthrough of a key component
3. Design decisions & improvements

---

## Key Success Factors

* Start with authentication → everything else depends on it
* Build **one tool perfectly** rather than many half-working tools
* Mock AI generation is acceptable
* Handle errors gracefully
* Write clean, production-level code with comments


