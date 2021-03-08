import React, { Component } from 'react';
import './App.css';
import Introduction from './components/introduction'
import Sidebar from './components/sidebar'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
            <div id="colorlib-main">
              <Introduction></Introduction>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
