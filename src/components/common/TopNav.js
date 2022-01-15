import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/common/topNav.module.scss'

export default function TopNav() {

  return (
    <nav className={styles.nav}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className={styles.logoContainer}>
              <Image src="/assets/logo.svg" width={130} height={32} alt="TopCamp logo" />
            </div>
          </div>

          <div className='col-6'>
            <ul className={styles.linkContainer}>
              <li>
                <button>
                  Apply Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
