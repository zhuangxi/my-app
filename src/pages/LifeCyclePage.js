import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LifeCyclePage extends Component {
  static defaultProps = {
    msg: "hi",
  };

  static propTypes = {
    msg: PropTypes.string, // .isRequired
  };

  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { count: 0 };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextState);
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render", this.props);
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <p>{count}</p>
        <button onClick={this.setCount}>改变Count</button>
        {/* {count % 2 && <Child count={count}></Child>} */}
        <Child count={count}></Child>
      </div>
    );
  }
}

class Child extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("Child render");
    const { count } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    );
  }
}
