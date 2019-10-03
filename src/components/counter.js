import React, { Component } from 'react';
import { connect } from 'react-redux';

const containerStyle = {
  display: 'flex'
}
const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px'
}

class Counter extends Component {

  addOne = () => {
    this.props.dispatch({ type: 'ADD_ONE' });
  }
  

  minusOne = () => {
    this.props.dispatch({ type: 'MINUS_ONE' });
  }

  

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>{this.props.number}</h1>
          <div style={containerStyle}>
         
            <button onClick={this.minusOne} type="button" style={buttonStyle}>-</button>
            <button onClick={this.addOne} type="button" style={buttonStyle}>+</button>
          </div>
        </header>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

// const dispatchStateToProps = () => {
//     handleSubmit:  (e) => dispatch => {
//         e.preventDefault()
//         const response = {
//             'first Name':e.target['First Name'].value
//         }

//         fetch( 'http://localhost:3001/responses', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(response)
//         })
//             .then( res => res.json())
//             .then( result => {
//                     dispatch({ type: 'RESPONSE_SUBMITTED' })
                
//             }) 
//     }

// }

export default connect(mapStateToProps)(Counter);
