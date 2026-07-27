import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-32" aria-label="Page not found">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-red">404</p>
        <h1 className="mt-4 text-display-lg font-heading font-bold text-foreground">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-md text-grey-600 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-13 items-center gap-2 rounded-full bg-foreground px-8 text-sm font-heading font-semibold text-white transition-all duration-300 hover:bg-charcoal"
        >
          Return Home
        </Link>
      </Container>
    </section>
  )
}
