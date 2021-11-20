import React from 'react';
import './App.css';
import Ccomponent from './Ccomponent';
import Fcomponent from './Fcomponent';
import  Menu  from './Menu';

function App() {
  const list = ["Main Page", "Goods", "Contacts", "Contacts", "Contacts", "Contacts", "Contacts", "Contacts", "Contacts"];
  return (
    <div className="App">
      <Fcomponent />
      <Ccomponent />
      <Menu list={list}/>
    </div>
  );
}

export default App;