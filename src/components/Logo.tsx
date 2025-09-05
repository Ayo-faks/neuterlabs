import clsx from 'clsx'
import Image from 'next/image'
import logoPng from '@/images/logo.png'

// Replaced original SVG Logomark with raster image. Props retained for API compatibility.
export function Logomark({
  className,
  invert = false,
  filled = false, // kept for compatibility (no effect now)
  ...props
}: React.ComponentPropsWithoutRef<'span'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <Image
      src={logoPng}
      alt="Neuter Labs"
      className={clsx('h-8 w-auto select-none', invert && 'dark:invert', className)}
      priority
    />
  )
}

// Replaced wordmark SVG + embedded Logomark with single PNG image. fillOnHover retained (no-op now).
export function Logo({
  className,
  invert = false,
  filled = false, // compatibility
  fillOnHover = false, // compatibility
  ...props
}: React.ComponentPropsWithoutRef<'span'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <Image
      src={logoPng}
      alt="Neuter Labs"
      className={clsx('h-8 w-auto select-none', invert && 'dark:invert', className)}
      priority
    />
  )
}
