import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  const Comp = Component as any
  return (
    <Comp className={cn('mx-auto w-full max-w-7xl px-6 lg:px-8', className)}>
      {children}
    </Comp>
  )
}
