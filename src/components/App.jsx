import { useState } from 'react';

import FeedbackOptions from './FeedBackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import { Container } from './App.styled';

export const App = () => {
  const [positive, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(setPositive);
  const countTotalFeedback = () => {
    return positive + neutral + bad;
  };

  const handleIncrement = key => {
    switch (key) {
      case 'good':
        setPositive(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const positivePercentage = () => {
    return Math.round((positive / countTotalFeedback()) * 100);
  };
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={positive}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage()}
          />
        )}
      </Section>
    </Container>
  );
};
