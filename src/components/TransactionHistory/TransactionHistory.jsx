import css from './transactionHistory.module.css';
// import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.itemsTheadTable}>
        <tr className={css.itemsTabl}>
          <th className={css.tittleTabl}>Type</th>
          <th className={css.tittleTabl}>Amount</th>
          <th className={css.tittleTabl}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={css.itemsBodyTable} key={id} id={id}>
            <td className={css.strBodyTable}>{type}</td>
            <td className={css.strBodyTable}>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
