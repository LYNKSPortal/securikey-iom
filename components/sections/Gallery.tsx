'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryImages = Array.from(
  { length: 12 },
  (_, i) => `/gallery/gallery-img-${String(i + 1).padStart(2, '0')}.jpg`
)

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 bg-white"
      aria-label="Gallery"
    >
      <div className="w-full">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: '0px 0px 200px 0px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-grey-200"
            >
              <Image
                src={src}
                alt={`Securikey gallery photo ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
