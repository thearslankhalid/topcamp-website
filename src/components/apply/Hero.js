import Image from 'next/image'
import styles from '@/styles/components/apply/hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <header className={styles.header}>
              <h1 className={styles.title}>
                <span className={styles.gradient}>Front-end bootcamp</span>
                <br />
                <span>application form</span>
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
