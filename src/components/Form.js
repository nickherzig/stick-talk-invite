import React, {useState} from 'react';
import '../css/Form.css'

function Form(props) {
    var [guess, setGuess] = useState({ userGuess: ''});

    function submitForm() {
        props.handleSubmit(guess.userGuess);
        setGuess({userGuess: ''});
      };

    

    return (
        <div className = "form-box">
        <form onSubmit={submitForm}>
        <input
            type="text"
            name="answer"
            id="answer"
            value={guess.userGuess}
            onChange={event => setGuess({ userGuess: event.target.value })} />
        <input className='btn' type="submit" value="Guess"/>
        </form>
        </div>
      );
  }

export default Form;