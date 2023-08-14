import { useState } from "react";

const Header = () => <h1>Give Feedback</h1>;
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Statistics = (props) => {
  console.log(props);
  const { goodValue, neutralValue, badValue, totalValue } = props;

  if (totalValue > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tr>
            <td>
              <StatisticLine name="Good" value={goodValue} />
            </td>
            <td>
              <StatisticLine name="Neutral" value={neutralValue} />
            </td>
            <td>
              <StatisticLine name="Bad" value={badValue} />
            </td>

            <td>
              <StatisticLine
                name="Average"
                value={(goodValue - badValue) / totalValue || 0}
              />
            </td>

            <td>
              <StatisticLine
                name="Positive"
                value={(100 * goodValue) / totalValue || 0}
              />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine name="Total" value={totalValue} />
            </td>
          </tr>
        </table>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given...</p>
    </div>
  );
};
const StatisticLine = (props) => {
  if (props.name === "Positive") {
    return (
      <p>
        {" "}
        {props.name}: {props.value} %
      </p>
    );
  } else {
    return (
      <p>
        {props.name}: {props.value}
      </p>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleFeedbackClick = (feedbackType) => {
    switch (feedbackType) {
      case "BAD":
        const updatedBad = bad + 1;
        setBad(updatedBad);
        setTotal(updatedBad + good + neutral);

        break;
      case "NEUTRAL":
        const updatedNeutral = neutral + 1;

        setNeutral(updatedNeutral);
        setTotal(updatedNeutral + good + bad);
        break;
      case "GOOD":
        const updatedGood = good + 1;

        setGood(updatedGood);
        setTotal(updatedGood + neutral + bad);
        break;
      default:
        break;
    }
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
      <Statistics
        goodValue={good}
        neutralValue={neutral}
        badValue={bad}
        totalValue={total}
      />
    </div>
  );
};

export default App;
