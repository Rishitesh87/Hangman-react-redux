import React, {PureComponent} from 'react'
import { connect } from 'react-redux'


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


    return (
      <div>

        <div className="Message">
          <p>{Message()}</p>
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
