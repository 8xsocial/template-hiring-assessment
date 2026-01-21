export function DressChangerExamples() {
  return (
    <div className="rounded-2xl bg-background-secondary/60 backdrop-blur-sm p-6 md:p-8">
      <h3 className="text-xl font-semibold text-white mb-4">Examples</h3>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-3">Example Transformation</h4>
        <p className="text-sm text-foreground-secondary mb-4">
          See what's possible with AI dress changing technology
        </p>
        
        <div className="relative aspect-square rounded-xl bg-black overflow-hidden mb-3">
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="flex items-center justify-center border-r border-white/10">
              <span className="text-foreground-tertiary">Original Model</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-foreground-tertiary">With New Dress</span>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10">
            <span className="text-xs font-medium text-white">Original Model</span>
          </div>
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10">
            <span className="text-xs font-medium text-white">With New Dress</span>
          </div>
        </div>
        <p className="text-xs text-center text-foreground-tertiary">Drag to compare before and after</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-3">Applied Garment</h4>
        <div className="w-32 h-32 rounded-lg bg-background-tertiary flex items-center justify-center">
          <span className="text-foreground-tertiary text-sm">Garment</span>
        </div>
        <p className="text-xs text-foreground-tertiary mt-2">Summer dress transformation</p>
      </div>
    </div>
  )
}