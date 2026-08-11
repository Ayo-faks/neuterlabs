import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    invert
      ? 'bg-gold-400 text-black hover:bg-gold-300 focus-visible:ring-gold-300'
      : 'bg-neutral-950 text-gold-50 hover:bg-neutral-800 focus-visible:ring-gold-400',
  )

  let inner = <span className="relative">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
