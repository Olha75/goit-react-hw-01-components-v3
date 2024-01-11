import css from './friendlist.module.css';
// import css from './friendlistItem.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friends => (
        <FriendListItem friends={friends} key={friends.id} />
      ))}
    </ul>
  );
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
