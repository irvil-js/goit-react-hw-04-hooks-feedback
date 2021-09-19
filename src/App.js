import React, { useState, useEffect } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPercentage(Math.ceil((100 / total) * good));
  }, [total, good]);

  const handleFeedback = ({ target }) => {
    const { name } = target;

    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  // const countTotalFeedback = () => {
  //   const total = good + neutral + bad;
  //   return total;
  // };

  // const countPositiveFeedbackPercentage = () => {
  // const positiveFeedback = Math.round((good / countTotalFeedback) * 100);
  // return positiveFeedback ? positiveFeedback : 0;
  //   return Math.round((good / countTotalFeedback()) * 100) || 0;
  // };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default App;
