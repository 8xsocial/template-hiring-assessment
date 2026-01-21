'use client'

export function VideoPreview() {
  return (
    <div className="rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-6 md:p-8">
      <h3 className="text-xl font-semibold text-white mb-4">Preview</h3>
      
      {/* Example Video */}
      <div className="relative aspect-video rounded-xl bg-black overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-foreground-tertiary">Preview will appear here</p>
        </div>
        
        {/* Example Badge */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <span className="text-xs font-medium text-white">Sora 2 Example</span>
        </div>
      </div>

      {/* Prompt Display */}
      <div className="rounded-lg bg-background-tertiary/50 p-4">
        <p className="text-xs font-medium text-foreground-secondary mb-2">Prompt:</p>
        <p className="text-sm text-foreground-secondary">
          Example prompt will be displayed here when you generate a video.
        </p>
      </div>
    </div>
  )
}