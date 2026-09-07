'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type Reveal3DProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** rotation on X axis in degrees when hidden */
  rotateX?: number
  y?: number
}

export function Reveal3D({
  children,
  className,
  delay = 0,
  rotateX = 24,
  y = 60,
}: Reveal3DProps) {
  return (
    <div className="scene-3d">
      <motion.div
        className={className}
        initial={{ opacity: 0, rotateX, y, z: -120 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0, z: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
