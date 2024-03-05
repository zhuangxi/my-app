import React, { Component } from "react";

export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }
  componentDidMount() {
    document.getElementById("btn").addEventListener("click", this.setCounter);
  }

  changeValue = (v) => {
    console.log("init", this.state.counter, v);
    // 异步执行
    this.setState({
      counter: this.state.counter + v,
    }, () => {
      console.log("callback counter", this.state.counter);
    });
    // console.log("counter", this.state.counter);
    // setTimeout(() => {
    //   console.log("time counter", this.state.counter);
    // }, 0)

    this.setState((state) => {
      console.log("fn ", state.counter, v );
      return {
        counter: state.counter + v
      }
    })
  };
  setCounter = () => {
    this.changeValue(1);
    this.changeValue(2);
  };
  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
        <button id="btn">btn{this.state.counter}</button>
      </div>
    );
  }
}
