import { useEffect, useRef, useState } from "react";
{/*import reactLogo from "./assets/react.svg"/;*/}
{/*import viteLogo from "/vite.svg";*/}
import "./App.css";


function App() {
  // Step 1: Create a theme state
  const [theme, setTheme] = useState('light');

  // Step 2: Function to toggle theme
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  
return (
  <div className={`app-container ${theme}`}>
      {/* Toggle button at top right */}
      <div className="top-right">
        <button onClick={toggleTheme}>
          {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
        </button>
      </div>

      <h1>Markdown Editor</h1>
      <textarea placeholder="Write your markdown here..." />
    </div>
  );
}

    // Step 3: Apply theme class to main div


      
{/* You can add your editor and preview here */}
  export default App;