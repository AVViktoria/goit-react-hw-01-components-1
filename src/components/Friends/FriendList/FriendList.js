import { React } from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
// import css from './FriendList.module.css';
// import { FaRegSmile } from 'react-icons/fa';
// import { iconSize } from 'constance';

import { Card, List, ListItem } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Card>
      <List>
        {friends.map(friend => {
          return (
            <ListItem key={friend.id}>
              <FriendListItem friend={friend} />
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

//*   Also   work   propTypes   like   below   //
// Friends.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       isOnline: PropTypes.bool.isRequired,
//       name: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
// id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

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
