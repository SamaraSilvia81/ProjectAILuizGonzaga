import React from 'react';
import { BsRobot, BsPlusLg} from 'react-icons/bs';
import './App.css';

function App() {
  return (
    <div>

      <header>
        <nav>
          <h2> <BsRobot /> IA Luiz Gonzaga </h2>
        </nav>
      </header>

      <main>
        <div className="container">

          <div className="container-input">
            <input id="input" placeholder="Type a Theme of music or a phrase"/>
            <button id="btnPlus" className="plus-button">
              <BsPlusLg className="plus-icon" />
            </button>
          </div>

          <div className="ai-response">
            <div id="div"></div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;