import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  border: 1px solid #e9eef3;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const CardDescription = styled.div`
background-position: center;
background-size: cover;
`;
export const CardAvatar = styled.img`
border: 3px solid #e9eef3;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-position: center;
  overflow: hidden;
`;

export const CardName = styled.p`
align-items: center;
  font-size: 28px;
  margin-bottom: 5px;
  `;

 
export const CardTag = styled.p`
display: flex;
  align-items: center;
  align-items: center;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 20px;
  justify-content: center;
  color: #928a8a;
  `;

export const CardLocation = styled.p`
font-size: 20px;
  margin-bottom: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #928a8a;`;

export const StatsContainer = styled.div`
background-color: #e9eef3;`;


export const Stats = styled.ul` 
display: grid;
  flex-direction: row;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #dddddd;
`;
export const StatsList = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 15px;
   :not(:last-child) {
   border-right: 1px solid #dddddd;}
 
`;
export const StatsLabel = styled.span`
  margin-bottom: 5px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
`;
export const StatsQuantity = styled.span`
  margin-bottom: 10px;
  color: #928a8a;
`;
