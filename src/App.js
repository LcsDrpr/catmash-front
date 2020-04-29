import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation/Navigation';





const App = () => {

  // const chatList = data.map((chat) => {

  //   nmbVote = nbmVote + chat.score;
  //   return(
    
  //   <li> Nom du chat = {chat.name}</li>
  //   )
  //   }
  // );

  return (
    <div className="App">

      <Navigation/>

    </div>
  );
}

export default App;
