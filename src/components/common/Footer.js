import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/common/footer.module.scss'
import SocialIcon from '../social-icons'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className={styles.logoContainer}>
              <Link href="/" passHref>
                <Image src="/assets/logo.svg" width={130} height={32} alt="TopCamp logo" />
              </Link>
            </div>
          </div>

          <div className='col-6'>
            <ul className={styles.socialMediaLinks}>
              <li>
                <SocialIcon href="https://facebook.com/groups/topcampers" kind="facebook" />
              </li>
              <li>
                <SocialIcon href="https://linkedin.com" kind="linkedin" />
              </li>
              {/* <li>
                <SocialIcon href="https://twitter.com" kind="twitter" />
              </li>
              <li>
                <SocialIcon href="https://github.com" kind="github" />
              </li> */}
            </ul>
          </div>

          <div className='col'>
            <hr className={styles.hr} />
            <div className={styles.copyrightContainer}>
              <small className={styles.copyright}>Copyright 2022 TopCamp</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
