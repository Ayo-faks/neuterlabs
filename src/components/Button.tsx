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
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out',
    'shadow-premium-sm hover:shadow-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-50 focus-visible:ring-white'
      : 'bg-neutral-950 text-white hover:bg-neutral-800 focus-visible:ring-neutral-950',
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
