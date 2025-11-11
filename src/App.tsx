{/*import { useEffect, useRef, useState } from "react";*/}
{/*import reactLogo from "./assets/react.svg"/;*/}
{/*import viteLogo from "/vite.svg";*/}
{/*import "./App.css";*/}
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  // Simple Markdown parser: Headings, Bold, Italic, Line breaks
 
const parseMarkdown = (text: string): string => {
  let html = text;

  

    // Headings
    html = html.replace(/^### (.*)$/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*)$/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*)$/gim, '<h1>$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Line breaks
    html = html.replace(/\n/gim, '<br />');

    return html;
  };

  return (
    <div className={`app-container ${theme}`}>
      <div className="top-right">
        <button onClick={toggleTheme}>
          {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
        </button>
      </div>

      <div className="editor-preview">
        {/* Editable Markdown Section */}
        <div className="editor">
          <h2>MARKDOWN</h2>
          <div
            className="markdown-input"
            contentEditable
            onInput={(e) => setMarkdown(e.currentTarget.innerText)}
          >
            
          </div>
        </div>

        {/* Preview */}
        <div className="preview">
          <h2>PREVIEW</h2>
          <div
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;