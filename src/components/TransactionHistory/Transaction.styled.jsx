import styled from '@emotion/styled';
export const TransactionContainer = styled.table`
  background: white;
  border-radius: 5px;
  border-collapse: collapse;
  height: 320px;
  max-width: 600px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
`;

export const MainThead = styled.thead``;

export const TableTr = styled.tr`
 color: #282829;
  border-top: 1px solid #c1c3d1;
  border-bottom: 1px solid #c1c3d1;
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
&:hover {
   color: #f4f4f7;
   border-top: 1px solid #22262e;
   background-color: #6b74d0;
 }

 &:first-of-type {
   border-top: none;
 }

 &:last-of-type {
   border-bottom: 1px solid #b2b7c2;
 }
  `;
export const MainTh = styled.th`
color: #d5dde5;
  background: #1b1e24;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: 23px;
  font-weight: 100;
  padding: 7px;
  text-align: center;
  
  vertical-align: middle;
&:first-of-type {
   border-top-left-radius: 3px;
 }

&:last-of-type {
   border-top-right-radius: 3px;
   border-right: none;
 }
`;



export const TableTbody = styled.tbody`
&:nth-of-type(2n) {
  background-color: #a9a9d2;}
`;

export const ContentTh = styled.th`
 padding: 10px;
   text-align: center;
   vertical-align: middle;
   font-weight: 500;
   font-size: 15px;
   border-right: 1px solid #c1c3d1;
 }

&:last-of-type {
   border-right: 0px;
 }
`;


// .transactionHistory {
  // background: white;
  // border-radius: 5px;
  // border-collapse: collapse;
  // height: 320px;

  // max-width: 600px;
  // padding: 5px;
  // width: 100%;
  // box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  // animation: float 5s infinite;
// }

// .mainTh {
  // color: #d5dde5;
  // background: #1b1e24;
  // border-bottom: 4px solid #9ea7af;
  // border-right: 1px solid #343a45;
  // font-size: 23px;
  // font-weight: 100;
  // padding: 7px;
  // text-align: center;
  
  // vertical-align: middle;
// }
// .tableTr {
  // color: #282829;
  // border-top: 1px solid #c1c3d1;
  // border-bottom: 1px solid #c1c3d1;
  // font-size: 16px;
  // font-weight: normal;
  // text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
// }




// .tableTr:hover {
//   color: #f4f4f7;
//   border-top: 1px solid #22262e;
//   background-color: #6b74d0;
// }

// .tableTr:first-child {
//   border-top: none;
// }

// .tableTr:last-child {
//   border-bottom: 1px solid #b2b7c2;
// }

// .mainTh:first-child {
//   border-top-left-radius: 3px;
// }

// .mainTh:last-child {
//   border-top-right-radius: 3px;
//   border-right: none;
// }

// .tableTbody:nth-child(2n) {
//   background-color: #a9a9d2;
// }

// .contentTh {
//   padding: 10px;
//   text-align: center;
//   vertical-align: middle;
//   font-weight: 500;
//   font-size: 15px;
//   border-right: 1px solid #c1c3d1;
// }

// .contentTh:last-child {
//   border-right: 0px;
// }
