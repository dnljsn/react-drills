import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://ih1.redbubble.net/image.576271258.5888/flat,550x550,075,f.u2.jpg"} />
      </div>
      );
    }
  }
  
  export default App;
