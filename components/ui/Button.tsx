import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

type ButtonProps =
  | (ButtonBaseProps & { href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (ButtonBaseProps & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)

const variants = {
  primary:
    'bg-red text-white border border-red hover:bg-red-dark hover:border-red-dark hover:shadow-lift',
  secondary:
    'bg-charcoal text-white border border-charcoal hover:bg-foreground hover:border-foreground hover:shadow-lift',
  outline:
    'bg-transparent text-foreground border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-white',
  ghost: 'bg-transparent text-foreground hover:bg-grey-100',
  light: 'bg-white text-foreground border border-grey-200 hover:border-grey-400 hover:shadow-soft',
}

const sizes = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-7 text-base',
  lg: 'h-14 px-9 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-all duration-300 ease-out-expo focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
