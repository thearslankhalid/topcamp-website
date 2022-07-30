import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types';
import styles from '@/styles/components/common/topNav.module.scss'

export default function TopNav({ showApplyButton }) {

  return (
    <nav className={styles.nav}>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className={styles.logoContainer}>
              <Link href="/" passHref>
                <Image src="/assets/logo-light.png" width={164} height={32} alt="TopCamp logo" />
              </Link>
            </div>
          </div>

          <div className='col-6'>
            {
              showApplyButton
                ? (
                  <ul className={styles.linkContainer}>
                    <li>
                      <Link href="/signup" passHref>
                        <button>
                          Apply Now
                        </button>
                      </Link>
                    </li>
                  </ul>
                ) : null
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

TopNav.propTypes = {
  showApplyButton: PropTypes.bool
};

TopNav.defaultProps = {
  showApplyButton: true
}
