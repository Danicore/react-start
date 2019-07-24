import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MyBody from './components/MyBody/MyBody';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <MyBody />
        <Footer />
      </div>
    );
  }
}

export default App;
