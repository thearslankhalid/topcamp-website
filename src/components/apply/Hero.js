import Image from 'next/image'
import styles from '@/styles/components/apply/hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.smallCircle}>
        <Image width={80} height={80} src="/assets/circle-sm.svg" alt="A circle filled with gradient" />
      </div>
      <div className={styles.largeCircle}>
        <Image width={250} height={250} src="/assets/circle-lg.svg" alt="A circle filled with gradient" />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <header className={styles.header}>
              <h1 className={styles.title}>
                <span>Application form for</span>
                <br />
                <span className={styles.gradient}>bootcamp</span>
              </h1>
              <p className={styles.lead}>
                Get hands on training and learn the basics of the front-end development from the pros.
              </p>
            </header>
          </div>
        </div>
      </div>
    </section>
  )
}
