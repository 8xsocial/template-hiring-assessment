'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Image as ImageIcon } from 'lucide-react'

export function ImageGenerationForm() {
  const { user } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    type: 'text',
    aspectRatio: '1:1',
    resolution: '1k',
    prompt: '',
  })

  const handleGenerate = () => {
    if (!user) {
      router.push('/auth/signin')
      return
    }
    console.log('Generate image:', formData)
  }

  return (
    <div className="rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-6 md:p-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <ImageIcon className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-white">Image Generator</h2>
        </div>
        <p className="text-sm text-foreground-secondary">
          Generate photorealistic AI images. See what's possible with photorealistic AI generated images
        </p>
      </div>

      {/* Generation Type */}
      <div className="mb-6">
        <Label className="mb-3 block text-white">Select Generation Type</Label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setFormData(prev => ({ ...prev, type: 'text' }))}
            className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              formData.type === 'text'
                ? 'bg-primary text-black'
                : 'bg-background-tertiary text-white hover:bg-white/10'
            }`}
          >
            <div className="font-bold">GENERATE FROM TEXT</div>
            <div className="text-xs opacity-75 mt-1">Create new images from text descriptions</div>
          </button>
          <button
            onClick={() => setFormData(prev => ({ ...prev, type: 'image' }))}
            className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              formData.type === 'image'
                ? 'bg-primary text-black'
                : 'bg-background-tertiary text-white hover:bg-white/10'
            }`}
          >
            <div className="font-bold">GENERATE FROM IMAGE</div>
            <div className="text-xs opacity-75 mt-1">Modify existing images with AI</div>
          </button>
        </div>
      </div>

      {/* Aspect Ratio */}
      <div className="mb-6">
        <Label className="mb-3 block text-white">Aspect Ratio</Label>
        <select
          value={formData.aspectRatio}
          onChange={(e) => setFormData(prev => ({ ...prev, aspectRatio: e.target.value }))}
          className="w-full rounded-lg bg-background-tertiary border border-border px-4 py-3 text-white focus:border-primary focus:outline-none"
        >
          <option value="1:1">Square (1:1)</option>
          <option value="16:9">Landscape (16:9)</option>
          <option value="9:16">Portrait (9:16)</option>
        </select>
      </div>

      {/* Resolution */}
      <div className="mb-6">
        <Label className="mb-3 block text-white">Resolution</Label>
        <select
          value={formData.resolution}
          onChange={(e) => setFormData(prev => ({ ...prev, resolution: e.target.value }))}
          className="w-full rounded-lg bg-background-tertiary border border-border px-4 py-3 text-white focus:border-primary focus:outline-none"
        >
          <option value="1k">1K (1 Credit)</option>
          <option value="2k">2K (2 Credits)</option>
          <option value="4k">4K (4 Credits)</option>
        </select>
      </div>

      {/* Prompt */}
      <div className="mb-6">
        <Label className="mb-3 block text-white">Prompt</Label>
        <textarea
          value={formData.prompt}
          onChange={(e) => setFormData(prev => ({ ...prev, prompt: e.target.value }))}
          placeholder="A beautiful sunset over mountains, cinematic lighting, photorealistic, 8K resolution, highly detailed"
          className="w-full h-32 rounded-lg bg-background-tertiary border border-border px-4 py-3 text-sm text-white placeholder:text-foreground-tertiary focus:border-primary focus:outline-none resize-vertical"
          maxLength={500}
        />
      </div>

      <Button onClick={handleGenerate} className="w-full" size="lg">
        {user ? 'Generate Image' : 'Sign in to generate'}
      </Button>
    </div>
  )
}