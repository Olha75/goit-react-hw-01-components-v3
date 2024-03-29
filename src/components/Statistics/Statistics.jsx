import css from './statistics.module.css';
import getRandomHexColor from 'helpers/randomColor';
import PropTypes from 'prop-types';

const Statistics = ({ title, items }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>UPLOAD STATS</h2>}

      <ul className={css.list}>
        {items.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            id={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{label}</span>;
            <span className={css.percentage}>{percentage}%</span>;
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
