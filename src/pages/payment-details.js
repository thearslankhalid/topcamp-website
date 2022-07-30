import Head from 'next/head';
import PropTypes from 'prop-types';
import Hero from '@/components/common/Hero';
import Footer from '@/components/common/Footer';
import TopNav from '@/components/common/TopNav';
import styles from '@/styles/components/payment-details/payment.module.scss';

const InfoList = ({ info }) => (
  <ul className={styles.infoList}>
    {info.map((infoItem, index) => (
      <li key={`info-list-item-${index}`}>
        <span>{infoItem.label}:</span>
        <span>{infoItem.value}</span>
      </li>
    ))}
  </ul>
);

InfoList.propTypes = {
  info: PropTypes.array.isRequired,
};

const infoDetails = [
  {
    label: 'Payment Total',
    value: '20,000 PKR',
  },
  {
    label: 'Verification Time',
    value: '1 business day',
  },
];

const InfoTable = ({ tableData }) => (
  <table className={styles.infoTable}>
    <tbody>
      {tableData.map((tableRow, index) => (
        <tr key={`table-row-${index}`}>
          <td>{tableRow.label}:</td>
          <td>{tableRow.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

InfoTable.propTypes = {
  tableData: PropTypes.array.isRequired,
};

const tableData = [
  {
    label: 'Beneficiary bank',
    value: 'United Bank Limited',
  },
  {
    label: 'Beneficiary account number',
    value: '0245237671945',
  },
  {
    label: 'Beneficiary account number (IBAN)',
    value: 'PK21UNIL0109000237671945',
  },
  {
    label: 'Beneficiary name',
    value: 'ARSLAN KHALID',
  },
  {
    label: 'Beneficiary bank address',
    value: 'Talagang Road, Chakwal Pakistan',
  },
  {
    label: 'Branch code',
    value: '0245',
  },
  {
    label: 'Swift code',
    value: 'UNILPKKA',
  }
];

export default function PaymentDetails() {
  return (
    <div>
      <Head>
        <title>TopCamp Payment Details</title>
      </Head>

      <main className={styles.main}>
        <TopNav showApplyButton={false} />
        <Hero gradientTitle="Payment Details" title="for bootcamp" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.contentBox}>
                <div className={styles.blockHeader}>Wire Transfer Account</div>
                <div>
                  <InfoList info={infoDetails} />
                  <div className={styles.infoBox}>
                    <p>
                      Please complete the wire transfer at your bank (local branch
                      or online) with the following information.
                    </p>
                  </div>
                  <div className={styles.tableContainer}>
                    <InfoTable tableData={tableData} />
                  </div>
                  <div className={styles.infoBox}>
                    <p>
                    Please share your receipt via email at info@topcamp.pk or Whatsapp to +92-304-8790282, after transferring the amount.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
