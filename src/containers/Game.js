// src/containers/Board.js
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import './Board.css'
import { connect } from 'react-redux'
import UserInput from '../components/userinput'

import Result from '../components/result'

export class Game extends PureComponent {


  render() {


    return (
      <div className="Board">
        <Result/>
        <UserInput/>
      </div>
    )
  }
}



// At the bottom of the file, where you connect your component:
const mapStateToProps = ({board}) => {
  // return an object with the prop names (keys) and prop values
  // taken from the reduxState (values)
  return {
    board,
  }
}

// Then pass it to connect:
export default connect(mapStateToProps)(Game)
