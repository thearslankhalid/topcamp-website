import styles from '@/styles/components/home/discoverSection.module.scss';
import Link from 'next/link';

const tracks = [
  {
    icon: 'lightbulb',
    title: 'HTML, CSS and Javascript basics workshop',
    description: 'Learn the basic building blocks of front-end development.',
    deadline: '01-03-2022',
    buttonText: 'Apply now',
  },
  {
    icon: 'developer_mode',
    title: 'Front-end development Bootcamp',
    description: 'Learn how to build user-friendly web applications from scratch.',
    deadline: '30-04-2022',
    buttonText: 'Apply now',
  },
];

const TrackCard = ({ track, secondary }) => (
  <div className="col-lg-6">
    <div className={`${secondary ? styles.secondaryTrackCard : ''} ${styles.trackCard}`}>
      <div className="row">
        <div className="col-5">
          <div className={styles.trackCardImage}>
            <span className={`material-icons ${styles.trackCardIcon}`}>{track.icon}</span>
          </div>
        </div>

        <div className="col-7">
          <div className={styles.trackCardBody}>
            <h3 className={styles.trackCardTitle}>{track.title}</h3>
            <p className={styles.trackCardDescription}>{track.description}</p>
            <Link href="/apply" passHref>
              <button className={styles.trackCardButton}>{track.buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function DiscoverSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="row">
          <div className={`col ${styles.container}`}>
            <h1 className={styles.title}>
              Discover our beginner friendly tracks
            </h1>
            <p className={styles.lead}>
              Become a student at TopCamp. The next application deadline is:
            </p>
            <div className={`row ${styles.trackCardsContainer}`}>
              {tracks.map((track, index) => (
                <TrackCard key={`track-card-${index}`} secondary={(index + 1) % 2 == 0} track={track} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
