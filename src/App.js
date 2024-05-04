
import React from 'react';

import './App.css';
import './assets/styles/reset.css';
import MenuHeaderNabvar from './components/menu-header/menuHeader.jsx';
import AboutMeView from './views/about-me/about-me.jsx';


function App() {
  return (

    <div className="App">
      <MenuHeaderNabvar />  
      <AboutMeView />
    </div>
  );
}

export default App;
