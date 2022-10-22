import styled from '@emotion/styled';
// import { setOnlineBcgColor } from 'utils';

// const setOnlineBcgColor = props => {
//   switch (props.type) {
//     case 'true':
//       return '#74ee7e';
//     case 'false':
//       return '#f24343';
//     default:
//       return '#ffff00';
//   }
// };
// export const Card = styled.div``;
export const Card = styled.section`
display: grid;
`;

export const FriendList = styled.ul``;

export const ListItem = styled.li`  background-color: rgba(198, 196, 196, 0.8);
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 280px;
  padding: 1rem;
  /* background-color: rgba(224, 223, 223, 0.996); */
  box-shadow: 4px 4px 16px #e1e1e1, -2px -2px 16px #fff;
  border-radius: 2.5rem;`;

export const OnlineStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ type }) => {
     return type ? 'green' : 'red';
   }};
 
  `;

//  background: ${(props) => {return(props.type ? 'red' : 'pink')}};

// ${(props) => {
//   console.log(props.type)
// }}
   
//  background-color: ${({ props }) => {
//     return props.type ? 'green' : 'red';
//   }};

 //background-color: ${setOnlineBcgColor};
  // 
  
 


export const FriendImg = styled.img`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const FriendName = styled.p`
  font-size: 20px;
  color: #191c1d;`;

