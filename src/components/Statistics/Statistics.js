import { React } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
// import getRandomHexColor from 'utils/randomColor';
import getRandomHexColor from 'utils';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ),
};
