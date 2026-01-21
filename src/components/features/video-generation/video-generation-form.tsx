'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Video } from 'lucide-react'

const characters = [
  { id: 'jake-paul', name: 'Jake Paul', avatar: '/avatars/jake-paul.jpg' },
  { id: 'sam-altman', name: 'Sam Altman', avatar: '/avatars/sam-altman.jpg' },
  { id: 'ricky-berwick', name: 'Ricky Berwick', avatar: '/avatars/ricky-berwick.jpg' },
  { id: 'xqc', name: 'XQC', avatar: '/avatars/xqc.jpg' },
  { id: 'ijustine', name: 'iJustine', avatar: '/avatars/ijustine.jpg' },
]

export function VideoGenerationForm() {
  const { user } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    model: 'sora-2',
    aspectRatio: '16:9',
    removeWatermark: false,
    generateFromImages: false,
    selectedCharacters: [] as string[],
    prompt: '',
  })

  const handleCharacterToggle = (characterId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedCharacters: prev.selectedCharacters.includes(characterId)
        ? prev.selectedCharacters.filter(id => id !== characterId)
        : prev.selectedCharacters.length < 3
        ? [...prev.selectedCharacters, characterId]
        : prev.selectedCharacters
    }))
  }

  const handleGenerate = () => {
    if (!user) {
      router.push('/auth/signin')
      return
    }
    // Generate logic will be implemented later
    console.log('Generate video:', formData)
  }

  return (
    <div className="rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-6 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Video className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-white">Generate Video</h2>
        </div>
        <p className="text-sm text-foreground-secondary">
          Transform your ideas into professional videos in seconds.
        </p>
      </div>

      {/* AI Model Selector */}
      <div className="mb-6">
        <Label className="mb-3 block text-white">AI Model</Label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setFormData(prev => ({ ...prev, model: 'veo-3.1' }))}
            className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              formData.model === 'veo-3.1'
                ? 'bg-primary text-black'
                : 'bg-background-tertiary text-white hover:bg-white/10'
            }`}
          >
            Google Veo 3.1
          </button>
          <button
            onClick={() => setFormData(prev => ({ ...prev, model: 'sora-2' }))}
            className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              formData.model === 'sora-2'
                ? 'bg-primary text-black'
                : 'bg-background-tertiary text-white hover:bg-white/10'
            }`}
          >
            OpenAI Sora 2
          </button>
        </div>
      </div>

      {/* Aspect Ratio */}
      <div className="mb-6">
        <Label className="mb-3 block text-white">Aspect Ratio</Label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setFormData(prev => ({ ...prev, aspectRatio: '16:9' }))}
            className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              formData.aspectRatio === '16:9'
                ? 'bg-primary text-black'
                : 'bg-background-tertiary text-white hover:bg-white/10'
            }`}
          >
            16:9 (Landscape)
          </button>
          <button
            onClick={() => setFormData(prev => ({ ...prev, aspectRatio: '9:16' }))}
            className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
              formData.aspectRatio === '9:16'
                ? 'bg-primary text-black'
                : 'bg-background-tertiary text-white hover:bg-white/10'
            }`}
          >
            9:16 (Portrait)
          </button>
        </div>
      </div>

      {/* Toggle Options */}
      <div className="mb-6 space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={formData.removeWatermark}
              onChange={(e) => setFormData(prev => ({ ...prev, removeWatermark: e.target.checked }))}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-background-tertiary rounded-full peer peer-checked:bg-primary transition-colors"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
          </div>
          <span className="text-sm font-medium text-white">Remove Watermark</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={formData.generateFromImages}
              onChange={(e) => setFormData(prev => ({ ...prev, generateFromImages: e.target.checked }))}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-background-tertiary rounded-full peer peer-checked:bg-primary transition-colors"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
          </div>
          <span className="text-sm font-medium text-white">Generate from Images</span>
        </label>
      </div>

      {/* Character Selection */}
      <div className="mb-6">
        <Label className="mb-3 block text-white">
          Select Characters to Star in Your Video (Up to 3)
        </Label>
        <div className="grid grid-cols-5 gap-3">
          {characters.map((character) => (
            <button
              key={character.id}
              onClick={() => handleCharacterToggle(character.id)}
              className={`flex flex-col items-center gap-2 rounded-lg p-2 transition-all ${
                formData.selectedCharacters.includes(character.id)
                  ? 'ring-2 ring-primary bg-primary/10'
                  : 'hover:bg-white/5'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-background-tertiary flex items-center justify-center text-2xl">
                {character.name[0]}
              </div>
              <span className="text-xs text-foreground-secondary text-center">
                {character.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Image Upload (shown when toggle is on) */}
      {formData.generateFromImages && (
        <div className="mb-6 space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <svg className="h-8 w-8 text-foreground-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm text-white font-medium">Upload Image</p>
              <p className="text-xs text-foreground-tertiary">Upload an image to generate a video</p>
            </div>
          </div>
        </div>
      )}

      {/* Prompt Input */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Label className="text-white">Describe your video</Label>
          <span className="text-primary"></span>
        </div>
        <textarea
          value={formData.prompt}
          onChange={(e) => setFormData(prev => ({ ...prev, prompt: e.target.value }))}
          placeholder="A dog running through a sunny meadow, cinematic style, golden hour lighting, high quality, 4K resolution"
          className="w-full h-32 rounded-lg bg-background-tertiary border border-border px-4 py-3 text-sm text-white placeholder:text-foreground-tertiary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-vertical"
          maxLength={500}
        />
        <p className="mt-2 text-xs text-foreground-tertiary">
          Be specific about subjects, actions, settings, camera angles, and visual style for best results.
        </p>
      </div>

      {/* Generate Button */}
      <Button
        onClick={handleGenerate}
        className="w-full"
        size="lg"
      >
        {user ? (
          <>
            <Video className="h-5 w-5 mr-2" />
            Generate Video
          </>
        ) : (
          <>
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            Sign in to generate
          </>
        )}
      </Button>
    </div>
  )
}