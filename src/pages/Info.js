import React, {useState} from 'react';
import Typewriter from "typewriter-effect";
import logo from '../images/apple.png';
import '../css/Info.css';

function Info() {
    const what = "What: Stick Talk annual Halloween renegade"
    const where = "Where: Joshua Tree, CA (-23.1231321, 39.3124143)"
    const when = "When: October 29th, 2022"
    const bring = "What to bring: dancing shoes"
    const leave = "What to leave: worries"

    var tw_options = {
        cursor: '',
        delay: 50,
      }

  return (
    <div className="Info">
        <img src={logo} />
      <Typewriter
        options={tw_options}
        onInit={(typewriter) => {
            typewriter
            .typeString(what)
            .pauseFor(500)
            .start();
        }}
        />
        <Typewriter
        options={tw_options}
        onInit={(typewriter) => {
            typewriter
            .pauseFor(1000)
            .typeString(where)
            .start();
        }}
        />
        <Typewriter
        options={tw_options}
        onInit={(typewriter) => {
            typewriter
            .pauseFor(2000)
            .typeString(when)
            .start();
        }}
        />
        <Typewriter
        options={tw_options}
        onInit={(typewriter) => {
            typewriter
            .pauseFor(3000)
            .typeString(bring)
            .start();
        }}
        />
        <Typewriter
        options={tw_options}
        onInit={(typewriter) => {
            typewriter
            .pauseFor(4000)
            .typeString(leave)
            .start();
        }}
        />
        <br></br>
        <p>Suggested donation of $10 per person to @stick-talkin on venmo</p>
    </div>
  );
}

export default Info;