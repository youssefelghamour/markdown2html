import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      html: ''
    };
  }


  componentDidMount() {
    this.setState({ markdown: placeholder });
    this.handleMarkdownChange({ target: { value: placeholder } }); // Initialize with placeholder
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
          <img src={logo} className='App-logo' alt='logo' />
          <p>Markdown2HTML</p>
        </header>
  
        <div className="App-content">
          <div className='markdownInputContainer'>
            <h2>Markdown Input</h2>
            <textarea className="markdownInput" onChange={this.handleMarkdownChange} value={this.state.markdown}></textarea>
          </div>

          <div className='markdownOutputContainer'>
            <h2>HTML Output</h2>
            <div className="markdownOutput" dangerouslySetInnerHTML={{ __html: this.state.html }}>
            </div>
          </div>
        </div>
  
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}


const placeholder = `# Markdown2HTML Converter

This application allows you to convert Markdown text into HTML on the fly. Simply type or paste your Markdown text into the input box, and it will automatically be converted to HTML.\n

## Features

- Instant conversion of Markdown to HTML
- Live preview of the output as you type
- User-friendly interface

## How to Use

* **Input:** Paste or type your Markdown text into the input field on the left.
* **Preview:** The HTML output will appear on the right in real-time.`;

export default App;