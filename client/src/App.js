import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Content from './components/Content/Content';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Hero />
  
        <Content />
  
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;