import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { Child } from './components/Child';
import { useState } from 'react';
import { FourthComponent } from './components/FourthComponent';

function App() {
  const [name, setName] = useState("Nest");
  const [message, setMessage] = useState("");

  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  }

  const medicalRecord = {
    height: "160",
    bloodGroup: "RhA+",
    allergies: "None"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent />
        <SecondComponent />
        <div>
          <hr />
          <FourthComponent />
          <hr />
        </div>
        <h1>Estados - Hooks</h1>
        <h2>Mensaje del hijo: </h2>
        <p>{message}</p>
        <Child name={name} setName={setName} addMessage={addMessage} />
        <ThirdComponent
          name="Néstor"
          lastName="Sanabria"
          card={medicalRecord}
        />
      </header>
    </div>
  );
}

export default App;
