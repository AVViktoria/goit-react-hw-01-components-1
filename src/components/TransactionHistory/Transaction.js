import { React } from 'react';
import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export default function Transaction({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </thead>

      {items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </tbody>
        );
      })}
    </table>
  );
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.number,
    }).isRequired
  ),
};
