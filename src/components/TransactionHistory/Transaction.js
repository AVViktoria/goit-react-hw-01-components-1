import { React } from 'react';
import PropTypes from 'prop-types';
// import css from './Transaction.module.css';
//*    styles..//
import {
  TransactionContainer,
  MainThead,
  TableTr,
  MainTh,
  TableTbody,
  ContentTh,
} from './Transaction.styled';
export default function Transaction({ items }) {
  return (
    <TransactionContainer>
      <MainThead>
        <TableTr>
          <MainTh>Type</MainTh>
          <MainTh>Amount</MainTh>
          <MainTh>Currency</MainTh>
        </TableTr>
      </MainThead>

      {items.map(({ id, type, amount, currency }) => {
        return (
          <TableTbody key={id}>
            <TableTr>
              <ContentTh>{type}</ContentTh>
              <ContentTh>{amount}</ContentTh>
              <ContentTh>{currency}</ContentTh>
            </TableTr>
          </TableTbody>
        );
      })}
    </TransactionContainer>
  );
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired
  ),
};

// export default function Transaction({ items }) {
//   return (
//     <table className={css.transactionHistory}>
//       <thead className={css.mainThead}>
//         <tr className={css.tableTr}>
//           <th className={css.mainTh}>Type</th>
//           <th className={css.mainTh}>Amount</th>
//           <th className={css.mainTh}>Currency</th>
//         </tr>
//       </thead>

//       {items.map(({ id, type, amount, currency }) => {
//         return (
//           <tbody key={id} className={css.tableTbody}>
//             <tr className={css.tableTr}>
//               <th className={css.contentTh}>{type}</th>
//               <th className={css.contentTh}>{amount}</th>
//               <th className={css.contentTh}>{currency}</th>
//             </tr>
//           </tbody>
//         );
//       })}
//     </table>
//   );
// }

// Transaction.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string,
//       type: PropTypes.string,
//       amount: PropTypes.string,
//       currency: PropTypes.string,
//     }).isRequired
//   ),
// };
