import { React } from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FaRegSmile } from 'react-icons/fa';
import { iconSize } from 'constance';

export default function Friends({ friends }) {
  return (
    <section className={css.friends}>
      <ul className={css.friendsList}>
        {friends.map(({ id, isOnline, name, avatar }) => {
          return (
            <li key={id} className={css.item}>
              <span>
                <FaRegSmile
                  className={isOnline ? css.status__true : css.status__false}
                  size={iconSize.sm}
                />
              </span>

              <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired
  ),
};
