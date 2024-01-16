import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';

const JokeGenerator = () => {
  const [joke, setJoke] = useState(null);
  const [isSetup, setIsSetup] = useState(true);
  // setJoke function is used to update the value of 'joke' state
  // isSetup initial value is true. Will determine if joke being displayed in setup or delivery

  const fetchJoke = async () => {
    const jokeData = await getJoke();
    setJoke(jokeData);
    // ^update 'joke' state variable w/ fetched joke data.
    setIsSetup((previous) => !previous);
    // If isSetup was true, it becomes false, and vice versa.
  };

  return (
    <div>
      <h1>Check out this Joke Generator!</h1>
      {joke && <p>{isSetup ? joke.setup : joke.delivery}</p>}
      {/* ^if joke is truthy, will render p element w/ setup or delivery of joke based on value of isSetup */}
      <Button onClick={fetchJoke}>
        {isSetup ? 'Show Joke' : 'Get Another One'}
        {/* If isSetup is true, the text is 'Show Joke', otherwise, it is 'Get Another One'. */}
      </Button>
    </div>
  );
};

export default JokeGenerator;
