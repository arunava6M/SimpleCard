import React from 'react';
import './App.css';
import { increment, decrement } from './actions';
import { connect } from 'react-redux';
import Card from './components/card/card.component';
function App({ increment, decrement,counter,logger }) {
  
  return (
    <div className="App">
      {/* <h3>Counter {counter}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}
      <Card />
    </div>

  );
}
const mapStateToProps=state=>{
  const {counter,logger} = state;
  return {counter , logger};

}
const mapDispatchToProp = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProp)(App);
