import css from './friendListItem.module.css';
import PropTypes from 'prop-types';
// export { FriendListItem } from '../FriendListItem/FriendListItem.jsx';

export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => (
  <li className={css.friends}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.imgFriends} src={avatar} alt={name} />
    <p className={css.name}>{name}</p>
  </li>
);

// export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
