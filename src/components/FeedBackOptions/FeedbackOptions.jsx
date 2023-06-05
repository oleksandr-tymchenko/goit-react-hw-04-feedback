import PropTypes from 'prop-types';

import { FeedbackCont, Btn } from './FeedBackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackCont>
      {options.map(option => {
        const capitalizedOption = option[0].toUpperCase() + option.slice(1);

        return (
          <Btn
            key={option}
            type="button"
            name={option}
            onClick={event => onLeaveFeedback(event.target.name)}
          >
            {capitalizedOption}
          </Btn>
        );
      })}

      {/* <button type="button">Neutral</button>
      <button type="button">Bed</button> */}
    </FeedbackCont>
  );
}

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
