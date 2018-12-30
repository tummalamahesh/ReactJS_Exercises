import React from "react";

function Joke(props) {
  return (
    <div>
      Question:{props.question} And PunchLine:{props.punchLine}
    </div>
  );
}

export default Joke;
