import { React } from 'react';
import PropTypes from 'prop-types'; // ES6
// var PropTypes = require("prop-types"); // ES5 with npm
import defaultImage from './default-avatar.jpg';

export default function Profile({
  avatar = defaultImage,
  username = 'User Name',
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag"> @{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
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
