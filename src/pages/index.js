import Head from 'next/head'
import TopNav from '@/components/common/TopNav'
import Hero from '@/components/home/Hero'
import CTASection from '@/components/common/CTAsection'
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
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}
