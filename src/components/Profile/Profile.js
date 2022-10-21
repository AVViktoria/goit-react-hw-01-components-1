import { React } from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

//*  ..img
import defaultImage from './default-avatar.jpg';
//*    icons..
import { TbAt } from 'react-icons/tb';
import { iconSize } from 'constance';

export default function Profile({
  avatar = defaultImage,
  username = 'User Name',
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>
          <TbAt className={css.iconEmail} size={iconSize.sm} />
          {tag}
        </p>
        <p className={css.location}>{location}</p>
      </div>
      <div className={css.statsContainer}>
        <ul className={css.stats}>
          <li className={css.list}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.list}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.list}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,

  avatar: PropTypes.string,
  stats: PropTypes.shape({
    Followers: PropTypes.number,
    statsViews: PropTypes.number,
    statsLikes: PropTypes.number,
  }),
};