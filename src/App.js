import React from 'react';
import './App.css';
import ContactUs from './ContactUs';
import Navbar from './Navbar'
import About from './About';
import {BrowserRouter ,Route} from 'react-router-dom'
import SideBar from './SideBar';
import MainContent from './MainContent';


function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Navbar />
      <SideBar />
      <Route path="/" exact component={MainContent} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={ContactUs} />
    </div>
    </BrowserRouter>
  )
}

export default App;
