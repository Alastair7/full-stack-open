import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
  );

  const Header = () => <h1>Give Feedback</h1>;

  const handleFeedbackClick = (feedbackType) => {
    switch (feedbackType) {
      case "BAD":
        setBad(bad + 1);
        break;
      case "NEUTRAL":
        setNeutral(neutral + 1);
        break;
      case "GOOD":
        setGood(good + 1);
        break;
      default:
        break;
    }
  };

  const Statistics = (props) => {
    console.log(props);
    const { goodValue, neutralValue, badValue } = props;

    return (
      <div>
        <h1>Statistics</h1>
        <p>Good: {goodValue}</p>
        <p>Neutral: {neutralValue}</p>
        <p>Bad: {badValue}</p>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Button handleClick={() => handleFeedbackClick("GOOD")} text="GOOD" />
      <Button
        handleClick={() => handleFeedbackClick("NEUTRAL")}
        text="NEUTRAL"
      />
      <Button handleClick={() => handleFeedbackClick("BAD")} text="BAD" />
      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} />
    </div>
  );
};

export default App;
