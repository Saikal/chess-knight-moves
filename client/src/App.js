import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
// import { Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  // const divRef = React.useRef()
  // const valueRef = React.useRef(90)

  componentDidMount() {
    // this.divRef = React.createRef();
    // this.valueRef = React.useRef(90);

        // <div id="divR" ref={this.divRef}>inner div 1</div>
  }

  render() {
    return (
      <div>

        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"/>
        <div>inner div 2</div>
        Hello World!
      </div>
    )
  }
}

export default App;
