import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    console.log("clicked the good button", good);
    const incrementGood = good + 1;
    setGood(incrementGood);
  };

  const handleNeutral = () => {
    console.log("clicked the neutral button", neutral);
    const incrementNeutral = neutral + 1;
    setNeutral(incrementNeutral);
  };

  const handleBad = () => {
    console.log("clicked the bad button", bad);
    const incrementBad = bad + 1;
    setBad(incrementBad);
  };

  const findAverage = () => {
    const sum = good - bad;
    const average = sum / all;
    return average;
  };

  const findPercentage = () => {
    const percentage = (good * 100) / all;
    return percentage;
  };

  let all = good + neutral + bad;

  return (
    <>
      <h1>give feedback</h1>

      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h1>Statistics</h1>

      {all === 0 ? (
        <h4>No feedback given</h4>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          findAverage={findAverage}
          findPercentage={findPercentage}
        />
      )}
    </>
  );
}
export default App;

const Statistics = (props) => {
  return (
    <>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="average" value={props.findAverage().toFixed(2)} />
      <StatisticLine
        text="percentage"
        value={props.findPercentage().toFixed(2)}
        percentageSign="%"
      />
    </>
  );
};

const StatisticLine = (props) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>{props.text}</td>
            <td>
              {props.value} {props.percentageSign}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

function Button(props) {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
}
