import { React } from 'react';
import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
import { FaRegSmile } from 'react-icons/fa';
import { iconSize } from 'constance';

import { OnlineStatus, FriendImg, FriendName } from './FriendListItem.styled';

export default function FriendListItem({ friend: { avatar, isOnline, name } }) {
  return (
    <>
      <OnlineStatus typeName={isOnline}>
        <FaRegSmile
          // className={isOnline ? css.status__true : css.status__false}
          size={iconSize.sm}
        />
      </OnlineStatus>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};
