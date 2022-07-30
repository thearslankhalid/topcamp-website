import Head from 'next/head';
import Hero from '@/components/apply/Hero';
import Footer from '@/components/common/Footer';
import TopNav from '@/components/common/TopNav';
import styles from '@/styles/components/apply/applyForm.module.scss';

export default function Apply() {
  return (
    <div>
      <Head>
        <title>TopCamp Application Form</title>
      </Head>

      <main className={styles.main}>
        <TopNav showApplyButton={false} />
        <Hero />
        <div className={`container ${styles.applyFormContainer}`}>
          <div className="row">
            <div className="offset-lg-1 col-lg-10">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf-7Zmk9rKjW_asMe6isMNL7yn6eohcyZeYQOvXe577jk37MA/viewform?embedded=true"
                width="100%"
                height="1413"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
