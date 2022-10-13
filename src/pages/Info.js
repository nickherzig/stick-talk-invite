import React, {useState} from 'react';
import Typewriter from "typewriter-effect";
import logo from '../images/logo.gif';
import '../css/Info.css';

function Info() {
    const what = "What: Stick Talk annual Halloween renegade"
    const where = "Where: Mojave, CA (-23.1231321, 39.3124143)"
    const when = "When: October 29th, 2022"
    const bring = "What to bring: dancing shoes and costumes"
    const RSVP = "RSVP: $10 per person to @stick-talkin on venmo"

    var tw_options = {
        cursor: '',
        delay: 50,
      }

  return (
    <div className="Info">
        <img src={logo} />
        <h1>STICK TALK</h1>
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
            .typeString(RSVP)
            .start();
        }}
        />
    </div>
  );
}

export default Info;