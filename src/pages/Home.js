import React, {useState} from 'react';
import Typewriter from "typewriter-effect";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Form from '../components/Form.js';
import '../css/Home.css';

function Home() {
  const riddle = "This is just a test of what this could be?"
  const answer = "stick talk"
  const navigate = useNavigate();
  const responses = ["guess again", "come on you got this", "so close"]
  const [checks, setChecks] = useState({ text: '' });
  const [incorrect_guesses, set_incorrect_guesses] = useState(0)

  function changePage(guess){
    if (guess.toLowerCase() === answer) {
      console.log("boo yah\n");
      navigate('/info');
    }
    else {
      console.log("incorrect\n");
      setChecks({text: responses[incorrect_guesses%responses.length]})
      set_incorrect_guesses(incorrect_guesses + 1)
    }
  }

  return (
    <div className="Home">
      <p>So it appears to me,<br />
         That there is an issue...<br />
         I don't know the password.<br />
         Can you help me figure it out?<br />
         Knoweledge is everything<br /><br />

         There, right in the box.<br />
         Any clues?<br />
         Like I said before...<br />
         Knoweledge is everything<br />
      </p>
    <div className='form'>
    <Form handleSubmit={changePage} />
    </div>
    </div>
  );
}

export default Home;