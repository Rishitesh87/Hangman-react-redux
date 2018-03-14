import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import './result.css'
import img6 from '../lib/images/6.png'
import img5 from '../lib/images/5.png'
import img4 from '../lib/images/4.png'
import img3 from '../lib/images/3.png'
import img2 from '../lib/images/2.png'
import img1 from '../lib/images/1.png'
import img0 from '../lib/images/0.png'


class Result extends PureComponent {



  render () {
    const { guessesLeft, remainingLetters, word } = this.props;

    const Message =()=> {
      if(remainingLetters === 0) {
  			return <p> Congrats you have won!!! </p>
  		}
  		else if (!guessesLeft > 0) {
  			return <p> Pity, you have lost.The word was {word} </p>;
  		}

    }

    let numberOfWrongGuesses= 6 - guessesLeft;

    const Image= ()=>{
      if(numberOfWrongGuesses === 0) {
        return <img src={img0} alt="0"/>
      }
      else if (numberOfWrongGuesses === 1) {
        return <img src={img1} alt="1"/>;
      }
      else if (numberOfWrongGuesses === 2) {
        return <img src={img2} alt="2"/>;
      }
      else if (numberOfWrongGuesses === 3) {
        return  <img src={img3} alt="3"/>;
      }
      else if (numberOfWrongGuesses === 4) {
        return  <img src={img4} alt="4"/>;
      }
      else if (numberOfWrongGuesses === 5) {
        return  <img src={img5} alt="5"/>;
      }
      else if (numberOfWrongGuesses === 6) {
        return  <img src={img6} alt="6"/>;
      }
    }



    return (
      <div className="result">
        <div className="Message">
          <p>{Message()}</p>
        </div>
        <div className="hangman-image">
          {Image()}
        </div>


      </div>
    )
  }
}

const mapStateToProps = ({ guesses }) => {
	return {
		remainingLetters: guesses.remainingLetters,
		guessesLeft: guesses.guessesLeft,
		letters: guesses.letters,
		word: guesses.word,
	};
}

export default connect(mapStateToProps) (Result);
