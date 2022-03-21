import Link from 'next/link'
import styles from '@/styles/components/common/ctaSection.module.scss'

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className='container'>
        <div className='row'>
          <div className={`col ${styles.container}`}>
            <h1 className={styles.title}>Start your application</h1>
            <p className={styles.lead}>Become a student at TopCamp. The application deadline is:</p>
            <p className={styles.date}>May, 25<sup className={styles.sup}>th</sup> 2022</p>
            <Link href="/apply" passHref>
              <a className={styles.link} href="https://www.google.com">Apply now</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
