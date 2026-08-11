/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="eager"
      decoding="async"
      className={clsx('block h-auto w-full max-w-full', className)}
    />
  )
}
