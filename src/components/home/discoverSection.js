import styles from '@/styles/components/home/discoverSection.module.scss';
import Link from 'next/link';

const tracks = [
  {
    icon: 'developer_mode',
    title: 'Front-end development Bootcamp',
    description:
      'Learn how to build user-friendly web applications from scratch.',
    deadline: '30-05-2022',
    buttonText: 'Apply now',
    isRegistrationOpen: true,
  },
  {
    icon: 'lightbulb',
    title: 'Back-end development Bootcamp',
    description:
      'Learn the basic building blocks of building scalable back-end applications.',
    deadline: '01-03-2022',
    buttonText: 'Coming soon!',
    isRegistrationOpen: false,
  },
];

const TrackCard = ({ track, secondary }) => (
  <div className="col-lg-6">
    <div
      className={`${secondary ? styles.secondaryTrackCard : ''} ${
        styles.trackCard
      }`}
    >
      <div className="row">
        <div className="col-5">
          <div className={styles.trackCardImage}>
            <span className={`material-icons ${styles.trackCardIcon}`}>
              {track.icon}
            </span>
          </div>
        </div>

        <div className="col-7">
          <div className={styles.trackCardBody}>
            <h3 className={styles.trackCardTitle}>{track.title}</h3>
            <p className={styles.trackCardDescription}>{track.description}</p>
            {track.isRegistrationOpen ? (
              <Link href="/apply" passHref>
                <button className={styles.trackCardButton}>
                  {track.buttonText}
                </button>
              </Link>
            ) : (
              <button className={styles.trackCardButton}>
                {track.buttonText}
              </button>
            )}
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
              Our bootcamps give you an entry point to the modern world
              of web development. Our beginner friendly tracks help you to
              succeed in tech:
            </p>
            <div className={`row ${styles.trackCardsContainer}`}>
              {tracks.map((track, index) => (
                <TrackCard
                  key={`track-card-${index}`}
                  secondary={(index + 1) % 2 == 0}
                  track={track}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
