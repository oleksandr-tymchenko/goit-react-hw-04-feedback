import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
  // <ul>
  //   {[good, neutral, bad, total].map(item => {
  //     const capitalizedItem = item[0].toUpperCase() + item.slice(1);
  //     console.log(capitalizedItem);
  //     return (
  //       <li>
  //         <p>
  //           {capitalizedItem}: {item}
  //         </p>
  //       </li>
  //     );
  //   })}
  // </ul>
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
