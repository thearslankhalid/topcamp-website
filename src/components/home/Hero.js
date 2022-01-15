import Image from 'next/image'
import styles from '@/styles/components/home/hero.module.scss'

export default function Hero() {
  const offers = [
    'Industry Experience',
    'Best practices',
    'Basics of JavaScript, Git, HTML, and CSS'
  ]

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
          <div className='col-lg-6'>
            <header className={styles.header}>
              <h1 className={styles.title}>
                <span>Learn modern</span>
                <br />
                <span className={styles.gradient}>web development</span>
              </h1>
              <p className={styles.lead}>
                Get hands on training and learn the basics of the front-end development from the pros.
              </p>
              <ul className={styles.offers}>
                  {
                    offers.map((offer, index) => (
                      <li className={styles.offerItem} key={`offer-${index}`}>
                        <span className="material-icons">
                          check_circle
                        </span>
                        <span>
                          {offer}
                        </span>
                      </li>
                    ))
                  }
              </ul>
              <form className={styles.subscribeForm}>
                <input type="email" required placeholder='Enter your email address' />
                <button type='submit'>Enroll Now</button>
              </form>
            </header>
          </div>

          <div className='col-lg-6'>
            <div className={styles.imageContainer}>
              <Image width="1200" height="800" src="/assets/coding-header-bg.svg" alt="A developer coding styling div elements" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
