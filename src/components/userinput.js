import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import guessedLetter from '../actions/guessletter'
// import Message  from '../../components/Message'

class UserInput extends PureComponent {

	constructor(props){
		super(props)
		this.state = {
			value: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
    // alert('You submitted the letter: ' + this.state.value);
    event.preventDefault();

		const {value} = this.state;
		const {submitValue} = this.props;

		submitValue(value);
		this.setState({value: ''});

	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {


    const { word, letters} = this.props;

		const guesses= letters.map(a =>a.letter)

		const showGuess =(word,guesses)=> {
			console.log(word)
     return word
      .split('')
      .map(char => (guesses.includes(char) ? char : '     _     '))


     }



		return (
			<div>
				<h3 className="instruction-text">Guess a letter</h3>
				<form onSubmit={this.handleSubmit}>
	        <input className="text-input" maxLength='1' value={this.state.value}  onChange={this.handleChange} />
	        <p className="text-center">
						<button type="submit" className="btn-large">Submit</button>
					</p>
				</form>
        <p> {showGuess(word,guesses)}</p>
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

const mapDispatchToProps = (dispatch) => {
	return {
		submitValue: (letter) => dispatch(guessedLetter(letter.toLowerCase()))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
