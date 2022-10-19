import { React } from 'react';
import PropTypes from 'prop-types'; // ES6
// var PropTypes = require("prop-types"); // ES5 with npm
import defaultImage from './default-avatar.jpg';
import css from './Profile.module.css';

export default function Profile({
  avatar = defaultImage,
  username = 'User Name',
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}> @{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
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