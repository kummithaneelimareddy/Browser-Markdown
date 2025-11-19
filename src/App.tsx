{/*import { useEffect, useRef, useState } from "react";*/}
{/*import reactLogo from "./assets/react.svg"/;*/}
{/*import viteLogo from "/vite.svg";*/}
{/*import "./App.css";*/}

import React, { useState, useEffect } from 'react';
import './App.css';
import ReorderIcon from './assets/reorder-four-outline.svg';
import DeleteIcon from './assets/trash-outline.svg';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
const parseMarkdown = (text: string): string => {
  let html = text;
    html = html.replace(/^###### (.*)$/gim, '<h6>$1</h6>');
    html = html.replace(/^##### (.*)$/gim, '<h5>$1</h5>');
    html = html.replace(/^#### (.*)$/gim, '<h4>$1</h4>');
    html = html.replace(/^### (.*)$/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*)$/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*)$/gim, '<h1>$1</h1>');

    html = html.replace(/((^>.*\n?){1,3})(?=\n[^>]|$)/gm, (match) => {
      const content = match.replace(/^> ?/gm, '');
      return `<blockquote>${content}</blockquote>`;
    });

    html = html.replace(/^\s*[-*] (.*)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');

    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '$2$1</a>');
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');
    html = html.replace(/`(.*?)`/gim, '<code>$1</code>');

    return html;
  };

  // Save preview HTML to localStorage
  const saveChanges = () => {
    const previewHTML = parseMarkdown(markdown);
    localStorage.setItem('previewContent', previewHTML);
    alert('Preview saved in browser!');
  };

  // Load saved preview on page load
  useEffect(() => {
    const savedPreview = localStorage.getItem('previewContent');
    if (!savedPreview) return;

    const el = document.querySelector<HTMLDivElement>('.preview-content');
    if (el) {
      el.innerHTML = savedPreview;
    }
  }, []);
 
  const deletePreview = () => {
    // remove saved data
    localStorage.removeItem('previewContent');
    localStorage.removeItem('markdownContent');

    // clear React state
    setMarkdown('');

    // null-safe: clear preview DOM if it exists
    const previewEl = document.querySelector<HTMLDivElement>('.preview-content');
    if (previewEl) previewEl.innerHTML = '';

    // null-safe: clear contentEditable editor if it exists
    const editorEl = document.querySelector<HTMLDivElement>('.markdown-input');
    if (editorEl) editorEl.innerText = '';

    alert('Content deleted from browser!');
  };


  return (
    <div className={`app-container ${theme}`}>
      {/* Header Bar */}
      <div className="header-bar">
        <div className="header-left">
          <img src={ReorderIcon} alt="Menu" className="menu-icon" />
          <span className="header-title">MARKDOWN</span>
          <div className="document-info">
            <span className="doc-label">Document Name</span>
            <span className="doc-name">welcome.md</span>
          </div>
        </div>
        <div className="header-right">
          <img src={DeleteIcon} className="delete-icon" onClick={deletePreview}
/>
          <button onClick={saveChanges} className="save-btn">Save Changes</button>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>

      {/* Editor & Preview */}
      <div className="editor-preview">
        <div className="editor">
          <div className="panel-header">MARKDOWN</div>
          <div
            className="markdown-input"
            contentEditable
            onInput={(e) => setMarkdown(e.currentTarget.innerText)}
          ></div>
        </div>

        <div className="preview">
          <div className="panel-header">PREVIEW</div>
          <div
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;