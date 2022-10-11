import React, {useState} from 'react';
import Typewriter from "typewriter-effect";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Form from '../components/Form.js';
import '../css/Home.css';

function Home() {
  const riddle = "What's 9+10?"
  const answer = "21"
  const navigate = useNavigate();
  const responses = ["guess again", "come on you got this", "one more and you get a hint!"]
  const [checks, setChecks] = useState({ text: '' });
  var incorrect_guesses = 0

  function changePage(guess){
    if (guess === answer) {
      console.log("boo yah\n");
      navigate('/info');
    }
    else {
      console.log("incorrect\n");
      setChecks({text: responses[incorrect_guesses%responses.length]})
      incorrect_guesses = incorrect_guesses + 1;
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