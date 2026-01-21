'use client'

export function ImagePreview() {
  return (
    <div className="rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-6 md:p-8">
      <h3 className="text-xl font-semibold text-white mb-4">Example Generation</h3>
      <div className="mb-4 text-sm text-foreground-secondary flex items-center gap-2">
        Pro tip: Use detailed descriptions with lighting, style, and mood for best results
      </div>
      <div className="relative aspect-square rounded-xl bg-black overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-foreground-tertiary">Preview will appear here</p>
        </div>
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
          <span className="text-xs font-medium text-white">1:1</span>
        </div>
      </div>
      <div className="rounded-lg bg-background-tertiary/50 p-4">
        <p className="text-xs font-medium text-foreground-secondary mb-2">Prompt:</p>
        <p className="text-sm text-foreground-secondary">
          Astronaut having dinner in the space, floating with tea in one hand and food in the other, realistic photo, bold colors
        </p>
      </div>
    </div>
  )
}