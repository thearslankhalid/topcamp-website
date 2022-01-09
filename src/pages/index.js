import Head from 'next/head'
import Hero from '@/components/home/Hero'
import CTASection from '@/components/common/CTAsection'

export default function Home() {

  return (
    <div>
      <Head>
        <title>TopCamp Website</title>
      </Head>

      <main>
        <Hero />
        <CTASection />
      </main>
    </div>
  )
}
