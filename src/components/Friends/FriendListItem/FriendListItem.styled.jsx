import styled from '@emotion/styled';
// import { setOnlineBcgColor } from 'utils';

export const OnlineStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ typeName }) => {
     return typeName ? 'green' : 'red';
   }};
  `;
 //background-color: ${setOnlineBcgColor};

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

