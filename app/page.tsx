import { Hero } from '@/components/sections/Hero'
import { Trust } from '@/components/sections/Trust'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Gallery } from '@/components/sections/Gallery'
import { MobileWorkshops } from '@/components/sections/MobileWorkshops'
import { InStore } from '@/components/sections/InStore'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { Harvey } from '@/components/sections/Harvey'
import { Statistics } from '@/components/sections/Statistics'
import { FAQ } from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Gallery />
      <Services />
      <About />
      <MobileWorkshops />
      <InStore />
      <WhyChooseUs />
      <Testimonials />
      <Statistics />
      <FAQ />
      <Harvey />
    </>
  )
}
