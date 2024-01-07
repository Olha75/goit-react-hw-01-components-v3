import css from './friendlist.module.css';

// import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const elements = friends.map(({ avatar, name, isOnline, id }) => (
    // <section className={css.myFriends}>
    <li className={css.friends} key={id} id={id}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.imgFriends} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
    /* </section> */
  ));
  return <ul className={css.list}>{elements}</ul>;
};

export default FriendList;

// FriendList.defaultProps = {
//   friends: [],
// };

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string,
//       name: PropTypes.string,
//       isOnline: PropTypes.bool,
//       id: PropTypes.number,
//     })
//   ),
// };

// const FriendList = ({ friends }) => {
//     const elements =
//   return (
//     <section className={css.friendList}>
//       <ul className={css.List}>
//         {friends.map(friends => (
//           <FriendList key={friends.id} {...friends} />
//         ))}
//       </ul>
//     </section>
//   );
// };
