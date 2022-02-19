import Head from 'next/head'
import TopNav from '@/components/common/TopNav'
import Hero from '@/components/home/Hero'
import DiscoverSection from '@/components/home/discoverSection'
import FaqSection from '@/components/common/FaqSection'
import CTASection from '@/components/common/CtaSection'
import Footer from '@/components/common/Footer'

export default function Home() {

  return (
    <div>
      <Head>
        <title>TopCamp Website</title>
      </Head>

      <main>
        <TopNav />
        <Hero />
        <DiscoverSection />
        <FaqSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}
