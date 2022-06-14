import Image from 'next/image'
import styles from '@/styles/components/home/hero.module.scss'
import Link from 'next/link'

export default function Hero() {
  const offers = [
    'Guided curriculum that follows the best industry practices',
    'Practical workshops and projects to help you gain first-hand experience',
    'Immersive and engaging content that covers the latest topics'
  ]

  return (
    <section className={styles.heroSection}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <header className={styles.header}>
              <h1 className={styles.title}>
                Become a developer
                <p className={styles.gradient}>without a CS degree</p>
              </h1>
              <p className={styles.lead}>
                Get hands on training and learn the skills of a front-end developer and code your own user-friendly web applications from scratch.
              </p>
              <ul className={styles.offers}>
                  {
                    offers.map((offer, index) => (
                      <li className={styles.offerItem} key={`offer-${index}`}>
                        <span className="material-icons">
                          &#xe86c;
                        </span>
                        <span>
                          {offer}
                        </span>
                      </li>
                    ))
                  }
              </ul>
              <form className={styles.subscribeForm}>
                {/* <input type="email" required placeholder='Enter your email address' /> */}
                <Link href="/apply" passHref>
                  <button type='submit'>Apply Now</button>
                </Link>
                <p className={styles.smallText}>Only 20 spots available</p>
              </form>
            </header>
          </div>

          <div className={`col-lg-5 ${styles.imageGridContainer}`}>
            <div className={styles.imageContainer}>
              <div className={styles.heroImg}>
                <Image layout='fill' src="/assets/hero/hero-pic-1.png" alt="A developer coding styling div elements" />
              </div>
              <div className={styles.heroImg}>
                <Image layout='fill' src="/assets/hero/hero-pic-2.png" alt="A developer coding styling div elements" />
              </div>
              <div className={styles.heroImg}>
                <Image layout='fill' src="/assets/hero/hero-pic-3.png" alt="A developer coding styling div elements" />
              </div>
              <div className={styles.heroImg}>
                <Image layout='fill' src="/assets/hero/hero-pic-4.png" alt="A developer coding styling div elements" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
