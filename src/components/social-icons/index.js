import Github from './github.svg'
import Facebook from './facebook.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  github: Github,
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
}

const SocialIcon = ({ kind, href }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  return (
    <a
      className="social-icon-link"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <SocialSvg
        className={`social-icon social-icon-${kind}`}
      />
    </a>
  )
}

export default SocialIcon
