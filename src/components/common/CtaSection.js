import Link from 'next/link';
import styles from '@/styles/components/common/ctaSection.module.scss';

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="row">
          <div className={`col ${styles.container}`}>
            <h1 className={styles.title}>Kickstart your career in modern web development</h1>
            <p className={styles.lead}>
              Get to know when our next cohort starts and get a chance to avail the early bird discount.
            </p>
            {/* <p className={styles.date}>
              June, 22<sup className={styles.sup}>nd</sup> 2022
            </p> */}
            <Link href="/signup" passHref>
              <a className={styles.link}>
                Yes, Sign me up
              </a>
            </Link>
            <p className={styles.smallText}>Stay updated on the next cohort</p>
          </div>
        </div>
      </div>
    </section>
  );
}
