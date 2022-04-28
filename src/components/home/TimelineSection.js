import Link from 'next/link';
import styles from '@/styles/components/home/timelineSection.module.scss';

const courseTimeline = [
  [
    { label: 'Getting Started' },
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'Responsive Design' },
  ],
  [
    { label: 'Git Basics' },
    { label: 'Advanced JavaScript' },
    { label: 'Junior Phase' },
    { label: 'JavaScript Basics' },
  ],
  [
    { label: 'React' },
    { label: 'Redux' },
    { label: 'Api Integration' },
    { label: 'Senior Phase' },
  ],
];

export default function TimelineSection() {
  return (
    <section className={styles.timelineSection}>
      <div className="container">
        <div className="row">
          <div className={`col ${styles.container}`}>
            <h2 className={styles.title}>Bootcamp track timeline</h2>
            <p className={styles.lead}>This is our sample bootcamp track timeline</p>
            <div className={styles.timelineContainer}>
              {courseTimeline.map((timelineRow, i) => (
                <div key={`timeline-row-${i}`} className={styles.timelineRow}>
                  {timelineRow.map((timelineItem, j) => (
                    <>
                      {i === 0 && j === 0 ? (
                        <div className={styles.emoji}>
                          &#128104;&#8205;&#128187;
                        </div>
                      ) : null}

                      {j || i === 0 ? (
                        <div className={styles.timelineColumnSeparator}></div>
                      ) : null}

                      <div
                        key={`timeline-item-${j}`}
                        className={styles.timelineItem}
                      >
                        <span>&#x1f3d5;</span> {timelineItem.label}
                      </div>

                      {i === courseTimeline.length - 1 &&
                      j === timelineRow.length - 1 ? (
                        <>
                          <div className={styles.timelineColumnSeparator}></div>
                          <div className={styles.emoji}>&#x1f3d5;</div>
                        </>
                      ) : null}
                    </>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
