import { useState } from 'react';
import styles from '@/styles/components/common/faqSection.module.scss'

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaqItem = () => setIsOpen(!isOpen);

  return (
    <div className={styles.faqItem}>
      <button onClick={toggleFaqItem} className={styles.faqButton}>
        {
          isOpen
            ? (
              <span className="material-icons-outlined md-36">
                &#xe5ce;
              </span>
            ) : (
              <span className="material-icons-outlined md-36">
                &#xe5cf;
              </span>
            )
        }
        {faq.question}
      </button>

      {
        isOpen
          ? <p>{faq.answer}</p>
          : null
      }
    </div>
  )
};

export default function FaqSection() {
  const faqColumns = [
    [
      {
        question: 'What will I pay for the bootcamp?',
        answer: 'This is a sample long answer to test how faqs look like in the first place if it is very long. Lets see how it looks.'
      },
      {
        question: 'What will I pay for the bootcamp?',
        answer: 'This is a sample long answer to test how faqs look like in the first place if it is very long. Lets see how it looks.'
      },
      {
        question: 'What will I pay for the bootcamp?',
        answer: 'This is a sample long answer to test how faqs look like in the first place if it is very long. Lets see how it looks.'
      },
    ],
    [
      {
        question: 'What will I pay for the bootcamp?',
        answer: 'This is a sample long answer to test how faqs look like in the first place if it is very long. Lets see how it looks.'
      },
      {
        question: 'What will I pay for the bootcamp?',
        answer: 'This is a sample long answer to test how faqs look like in the first place if it is very long. Lets see how it looks.'
      },
      {
        question: 'What will I pay for the bootcamp?',
        answer: 'This is a sample long answer to test how faqs look like in the first place if it is very long. Lets see how it looks.'
      }
    ]
  ];

  const renderFaqColumn = (column) => (
    <div className={styles.faqColumnContainer}>
      {column.map((faq, index) => (<FaqItem faq={faq} key={`faq-${index}`} />))}
    </div>
  );
 
  return (
    <section className={styles.faqSection}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className={styles.title}>FAQs</h2>
            <p className={styles.subtitle}>This is a sample subtitle</p>
            <div className={styles.faqContainer}>
              {faqColumns.map((column, index) => renderFaqColumn(column))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
