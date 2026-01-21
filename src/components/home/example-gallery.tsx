'use client'

import Image from 'next/image'

export function ExampleGallery() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Custom Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 auto-rows-fr gap-4">

          {/* Column 1: Tall Image */}
          <div className="row-span-2">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/examples/example-1.jpeg"
                alt="Example 1"
                fill
                className="object-cover transition-transform hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Column 2: Square Image (Top) */}
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src="/examples/example-2.jpeg"
                alt="Example 2"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>

          {/* Column 3: Tall Image */}
          <div className="row-span-2">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/examples/example-4.jpeg"
                alt="Example 4"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>

          {/* Column 4: Square Image (Top) */}
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src="/examples/example-5.jpeg"
                alt="Example 5"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>

          {/* Column 5: Tall Image */}
          <div className="row-span-2">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/examples/example-7.jpeg"
                alt="Example 7"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>

          {/* Column 2: Square Image (Bottom) */}
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src="/examples/example-3.jpeg"
                alt="Example 3"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>

          {/* Column 4: Square Image (Bottom) */}
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <Image
                src="/examples/example-6.jpeg"
                alt="Example 6"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
