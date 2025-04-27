import { Component } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import "./Content.css";
import { FaCheck } from "react-icons/fa";
import image from '../../assets/title.png';



class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
            html: '',
            preview: true
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

    handleCopy = () => {
        navigator.clipboard.writeText(this.state.html).then(() => {
            const flashMessage = document.querySelector('.flash-message');
            flashMessage.id = 'show';
            setTimeout(() => {
                flashMessage.id = 'hide';
            }, 2000);
        });
    }

    render() {
        return (
            <div className="App-content">
                <div className='inputContainer'>
                    <h2>Markdown Input</h2>
                    <textarea className="markdownInput" onChange={this.handleMarkdownChange} value={this.state.markdown}></textarea>
                </div>

                <div className='outputContainer'>
                    <div className="outputHeader">
                        <h2>HTML Output</h2>

                        <div>
                            <button className="preview-button" onClick={() => this.setState({ preview: true })} id={!this.state.preview ? 'not-selected-button' : ''}>
                                Preview
                            </button>
                            <button className="html-button" onClick={() => this.setState({ preview: false })} id={this.state.preview ? 'not-selected-button' : ''}>
                                HTML
                            </button>
                        </div>
                    </div>

                    <button className="copy-button" title="Copy" onClick={() => this.handleCopy()}>
                        <MdOutlineContentCopy size={17}/>
                    </button>

                    {this.state.preview ?
                    (
                        <div className="htmlOutput" dangerouslySetInnerHTML={{ __html: this.state.html }}>
                        </div>
                    ) : (
                        <div className="rawHtmlOutput">
                        {this.state.html}
                        </div>
                    )}
                </div>

                <div className="flash-message" id="hide">
                    <FaCheck />
                    <p>Copied to clipboard</p>
                </div>
            </div>
        );
    }
}


const placeholder = `# Markdown to HTML Converter

This application allows you to convert Markdown text into HTML on the fly. Simply type or paste your Markdown text into the input box, and it will automatically be converted to HTML.\n

## Features

- Instant conversion of Markdown to HTML
- Live preview of the output as you type
- User-friendly interface

## How to Use

* **Input:** Paste or type your Markdown text into the input field on the left.
* **Preview:** The HTML output will appear on the right in real-time.

## Guide

- To add an unordered list item, start your sentence with '-'.
- To add an ordered list item, start your sentence with '*'.
- To add an image, use the following syntax: **![label](url)**
  ![logo_image](${image})
- To add a blockquote, use '>' at the beginning of your sentence:
  > This is a quote.

- To add an inline code, start your sentence with a backtick \`:
Example of \`an inline code block\`: \`print("Hello")\`.
- To add a multiline code block, start your sentence with 3 backticks or 4 spaces:

    # Example code in python
    if true:
      print('Hello World!')

- To make text **bold**, simply wrap it in '**'.
- To make text __italic__, wrap it in '__'.
`;


export default Content;