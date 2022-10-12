import React, {useState} from 'react';
import Typewriter from "typewriter-effect";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Form from '../components/Form.js';
import '../css/Home.css';

function Home() {
  const riddle = "This is just a test of what this could be?"
  const answer = "password"
  const navigate = useNavigate();
  const responses = ["guess again", "come on you got this", "so close"]
  const [checks, setChecks] = useState({ text: '' });
  const [incorrect_guesses, set_incorrect_guesses] = useState(0)

  function changePage(guess){
    if (guess === answer) {
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
     <div className="typewriter">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(riddle)
            .start();
        }}
      />
      <div className='response'>
      <Typewriter
        options={{
          strings: [checks.text],
          autoStart: true,
          cursor: '',
        }}
        />
        </div>
      </div>
    <Form handleSubmit={changePage} />
    </div>
  );
}

export default Home;