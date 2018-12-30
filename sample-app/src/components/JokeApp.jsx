import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

function JokeApp() {
  const jokesComponents = jokesData.map(function(joke) {
    return (
      <Joke question={joke.question} punchLine={joke.punchLine} key={joke.id} />
    );
  });

  return <div>{jokesComponents}</div>;
}

export default JokeApp;
