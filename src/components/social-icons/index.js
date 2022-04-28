import Github from './github.svg'
import Facebook from './facebook.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import JavaScriptIcon from './javascript.svg'
import Node from './nodedotjs.svg'
import NextIcon from './nextdotjs.svg'
import Laravel from './laravel.svg'
import ReactIcon from './react.svg'
import VueIcon from './vuedotjs.svg'
import CSharp from './csharp.svg'
import Sass from './sass.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  github: Github,
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  javascript: JavaScriptIcon,
  node: Node,
  next: NextIcon,
  react: ReactIcon,
  laravel: Laravel,
  vue: VueIcon,
  csharp: CSharp,
  sass: Sass
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
