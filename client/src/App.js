import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      html: ''
    };
  }

  handleMarkdownChange = async (e) => {
    const markdownText = e.target.value;
    this.setState({ markdown: markdownText });

    const response = await fetch('http://localhost:5000/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: markdownText })
    });

    const data = await response.json(); // Assuming the server returns JSON
    this.setState({ html: data.html }); // Set the received HTML to state
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Markdown2HTML</p>
        </header>
  
        <div className="App-content">
          <textarea className="markdownInput" onChange={this.handleMarkdownChange} value={this.state.markdown}></textarea>
          <div className="markdownOutput" dangerouslySetInnerHTML={{ __html: this.state.html }}>
          </div>
        </div>
  
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;