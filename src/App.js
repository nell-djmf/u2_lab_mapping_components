import React from 'react';
import './App.css';
import Contact from './components/Contact';
import contacts from "./data/contacts.json"




console.log(contacts)
function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <Contact contacts={contacts.results}></Contact>
    </div>
  );
}

export default App;
