import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/App.css'
import { AccessibilityProvider } from "./AccessibilityContext"; 
import AccessibilityToolbar from "./AccessibilityToolbar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccessibilityProvider>
      <AccessibilityToolbar />

      <main id="main-content"></main>
      <section id="section1"></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <header id="header"></header>
      <footer id="footer"></footer>

      <div className="main-content" id="main-content">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <a href="#">EIN LINK</a>
      </div>
      </AccessibilityProvider>
    </>
  )
}

export default App
