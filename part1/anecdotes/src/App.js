import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};
const Vote = (props) => <p>Has {props.votes} votes</p>;
const Anecdote = (props) => <p>{props.anecdote}</p>;
const Header = (props) => <h1>{props.title}</h1>;

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(8));
  const [best, setBest] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const handleNextClick = (anecdotes) => {
    const minIndex = 0;
    const maxIndex = anecdotes.length;

    const randomIndex = Math.floor(
      Math.random() * (maxIndex - minIndex) + minIndex
    );

    setSelected(randomIndex);
  };
  const handleVoteClick = (votedIndex) => {
    const votesCopy = [...votes];
    votesCopy[votedIndex] += 1;

    const maxVoted = votesCopy.indexOf(Math.max(...votesCopy));

    setVotes(votesCopy);
    setBest(maxVoted);
  };

  return (
    <div>
      <Header title="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} />
      <Vote votes={votes[selected]} />
      <Button
        handleClick={() => handleNextClick(anecdotes)}
        text="Next Anecdote"
      />
      <Button handleClick={() => handleVoteClick(selected)} text="Vote" />

      <Header title="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[best]} />
      <Vote votes={votes[best]} />
    </div>
  );
};

export default App;
