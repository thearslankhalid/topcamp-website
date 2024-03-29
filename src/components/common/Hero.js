import Image from 'next/image'
import PropTypes from 'prop-types';
import styles from '@/styles/components/apply/hero.module.scss'

export default function Hero({ title, gradientTitle, paragraph }) {
  return (
    <section className={styles.heroSection}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <header className={styles.header}>
              <h1 className={styles.title}>
                <span className={styles.gradient}>{gradientTitle}</span>
                <br />
                <span>{title}</span>
              </h1>
              <p className={styles.lead}>{paragraph}</p>
            </header>
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  gradientTitle: PropTypes.string,
  paragraph: PropTypes.string,
}

Hero.defaultProps = {
  title: "application form",
  gradientTitle: "Front-end bootcamp",
  paragraph: "Get hands on training and learn the basics of the front-end development from the pros."
};
