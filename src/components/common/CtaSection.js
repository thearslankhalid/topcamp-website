import Link from 'next/link';
import styles from '@/styles/components/common/ctaSection.module.scss';

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="row">
          <div className={`col ${styles.container}`}>
            <h1 className={styles.title}>Start your application</h1>
            <p className={styles.lead}>
              Become a student at TopCamp and kickstart your career in modern
              web development.
              <br />
              The application deadline is:
            </p>
            <p className={styles.date}>
              June, 22<sup className={styles.sup}>nd</sup> 2022
            </p>
            <Link href="/apply" passHref>
              <a className={styles.link} href="https://www.google.com">
                Apply now
              </a>
            </Link>
            <p className={styles.smallText}>Only 20 spots available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
