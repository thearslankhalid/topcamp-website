import styles from '@/styles/components/home/instructorSection.module.scss';
import Image from 'next/image';
import SocialIcon from '../social-icons';

const team = [
  {
    imgUrl: '/assets/team/team-1.png',
    name: 'Shah Hassan',
    title: 'Full-stack Developer',
    technologies: ['javascript', 'csharp'],
    socials: [
      {
        platform: 'twitter',
        url: 'https://twitter.com/shahhassancs'
      },
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/shahhassancs/'
      }
    ],
    description:
      'Experienced in building user-friendly multi-tenant applications.',
  },
  {
    imgUrl: '/assets/team/team-2.png',
    name: 'Arslan Khalid',
    title: 'Front-end Developer',
    technologies: ['javascript', 'next', 'react', 'sass'],
    socials: [
      {
        platform: 'twitter',
        url: 'https://twitter.com/thearslankhalid'
      },
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/thearslankhalid/'
      }
    ],
    description:
      'Experienced in building client-facing applications and e-commerce stores.',
  },
];

export default function InstructorSection() {
  return (
    <section className={styles.instructorSection}>
      <div className="container">
        <Image
          height={120}
          width={140}
          src="/assets/Pattern.svg"
          alt="A developer coding styling div elements"
        />
        <div className="row">
          <div className={`col ${styles.container}`}>
            <h2 className={styles.title}>Meet your instructors</h2>
            <p className={styles.lead}>
              Experienced instructors that will help you kickstart your career in the field of IT industry:
            </p>
            <div className={styles.instructorCardsContainer}>
              {team.map((instructor, i) => (
                <div
                  key={`instructor-card-${i}`}
                  className={styles.instructorCard}
                >
                  <div className={styles.left}>
                    <Image
                      layout="fill"
                      src={instructor.imgUrl}
                      alt="A developer coding styling div elements"
                    />
                  </div>
                  <div className={styles.right}>
                    <h3>{instructor.name}</h3>
                    <p className={styles.instructorTitle}>{instructor.title}</p>
                    <ul className={styles.technologies}>
                      {
                        instructor.technologies.map((technology, i) => (
                          <li key={`technology-${i}`}>
                            <SocialIcon href="#" kind={technology} />
                          </li>
                        ))
                      }
                    </ul>
                    <p className={styles.description}>{instructor.description}</p>
                    <ul className={styles.socialMediaLinks}>
                      {
                        instructor.socials.map((social, i) => (
                          <li key={`social-media-link-${i}`}>
                            <SocialIcon href={social.url} kind={social.platform} />
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.lastImageContainer}>
          <Image
            height={120}
            width={140}
            src="/assets/Pattern.svg"
            alt="A developer coding styling div elements"
          />
        </div>
      </div>
    </section>
  );
}
