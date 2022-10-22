import { React } from 'react';
import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
import { FaRegSmile } from 'react-icons/fa';
import { iconSize } from 'constance';

import {
  Card,
  FriendList,
  ListItem,
  OnlineStatus,
  FriendImg,
  FriendName,
} from './FriendList.styled';

export default function Friends({ friends }) {
  return (
    <Card>
      <FriendList>
        {friends.map(({ id, isOnline, name, avatar }) => {
          return (
            <ListItem key={id}>
              <OnlineStatus typeName={isOnline}>
                <FaRegSmile
                  // className={isOnline ? css.status__true : css.status__false}
                  size={iconSize.sm}
                />
              </OnlineStatus>
              <FriendImg src={avatar} alt="User avatar" width="48" />
              <FriendName>{name}</FriendName>
            </ListItem>
          );
        })}
      </FriendList>
    </Card>
  );
}
Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired
  ),
};
// export default function Friends({ friends }) {
//   return (
//     <section className={css.friends}>
//       <ul className={css.friendsList}>
//         {friends.map(({ id, isOnline, name, avatar }) => {
//           return (
//             <li key={id} className={css.item}>
//               <span>
//                 <FaRegSmile
//                   className={isOnline ? css.status__true : css.status__false}
//                   size={iconSize.sm}
//                 />
//               </span>

//               <img
//                 className={css.avatar}
//                 src={avatar}
//                 alt="User avatar"
//                 width="48"
//               />
//               <p className={css.name}>{name}</p>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// }

// Friends.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       isOnline: PropTypes.bool,
//       name: PropTypes.string,
//       avatar: PropTypes.string,
//     }).isRequired
//   ),
// };
