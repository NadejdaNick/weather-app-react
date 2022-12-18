import React from "react";
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App"> 
    <div className="container">
      <Weather />
      <footer>
      This project was coded by Nadya Khokhlowa and is{" "}
          <a
            href="https://github.com/NadejdaNick/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"            
          >
            open-sourced on GitHub
          </a>
          and hosted on Netlify
          
      </footer>
      </div>
      </div>
  );
}


