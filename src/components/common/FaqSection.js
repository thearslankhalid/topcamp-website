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
          ? <p className={styles.faqBody}>{faq.answer}</p>
          : null
      }
    </div>
  )
};

export default function FaqSection() {
  const faqColumns = [
    [
      {
        question: 'What is the fee for the bootcamp?',
        answer: 'The total fee for the Front-end bootcamp of 4 months is only 20,000 PKR.'
      },
      {
        question: 'What are the payment options for the bootcamp?',
        answer: 'You will have to pay for the full fee (20,000 PKR) upfront in a lump sum for the bootcamp. We do not have installment options available currently.'
      },
      {
        question: 'Which technologies will be covered?',
        answer: 'We will cover modern front-end technologies like React, Javascript, HTML, SCSS, Git and many more in depth.'
      },
      {
        question: 'How will the classes be conducted?',
        answer: 'All the classes will be on-site. There will be a total of 5 sessions in a week. There will be 2 sessions of 2 hrs in the week days (Tue & Thurs) and 2 sessions of 6 hrs over the weekends (Sat & Sun).'
      },
      {
        question: 'Are there any pre-requisites to join?',
        answer: 'There are no pre-requisites required to join the bootcamp. We believe that programming is a skill like others. It can be learnt with hard work, practice, and passion. '
      }
    ],
    [
      {
        question: 'When will the bootcamp start?',
        answer: 'The bootcamp will officially start from 25th June, 2022.'
      },
      {
        question: 'Why will employers hire graduates from a bootcamp?',
        answer: 'We at TopCamp have a strong curriculum and training that will prepare you to succeed in tech jobs. Throughout the program we will be making you work in ways that mirror in-demand jobs: team projects, tight deadlines, and building products.'
      },
      {
        question: 'Who can we contact if we have more questions?',
        answer: 'Please reach out to contact.topcamp@gmail.com for any further questions.'
      },
      {
        question: 'What are the computer requirements?',
        answer: 'Our curriculum consists of many instructions and software packages that work seamlessly with a good spec laptop. We recommend a laptop with a minimum of 8GB of RAM and a quad-core processor released in the last few years. However, it is possible to complete the program with lower spec laptops.'
      },
      {
        question: 'Who is eligible to apply?',
        answer: 'You can apply for the bootcamp if you are a college student, undergraduate or a graduate.'
      }
    ]
  ];

  const renderFaqColumn = (column, index) => (
    <div key={`faq-column-${index}`} className={styles.faqColumnContainer}>
      {column.map((faq, index) => (<FaqItem faq={faq} key={`faq-${index}`} />))}
    </div>
  );
 
  return (
    <section className={styles.faqSection}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <p className={styles.subtitle}>Find answers to common questions about TopCamp programs, resources and more!</p>
            <div className={styles.faqContainer}>
              {faqColumns.map((column, index) => renderFaqColumn(column, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
