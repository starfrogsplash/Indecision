import React, { Component } from 'react';
import './App.css';


class Counter extends Component {
constructor(props){
  super(props)
  this.state = {
    count: 0
  }
}

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  minuOne = () => {
    this.setState({ count: this.state.count - 1 })
  }

  reset = () => {
    this.setState({ count: 0 })
  }

  componentDidMount(){
    const stringCount = localStorage.getItem('count')
    const count = parseInt(stringCount, 10)
    if (!isNaN(count)){
      this.setState(()=>({count}))
    }
  }

  componentDidUpdate(prevState, prevProps){

    if (prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count)
    }
  }


  render() {
    return (
      <div className="App">
        <h1 className="Count" >Count: {this.state.count}</h1>
        <button onClick={this.addOne} > +1 </button>
        <button onClick={this.minuOne} > -1 </button>
        <button onClick={this.reset} > reset </button>
      </div>
    );
  }
}

export default Counter;
