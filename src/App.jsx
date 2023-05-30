import React from 'react'
import Header from './component/header/Header'
import Contact from './component/contact/Contact'
import Experience from './component/experience/Experience'
import Porfolio from './component/porfolio/Porfolio'
import Footer from './component/footer/Footer'
import Nav from './component/nav/Nav'
import About from './component/about/About'
// import { BrowserRouter as Router } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Contact/>
      <Experience/>
      <Porfolio/>
      <Footer/>
    </div>
  );
}

export default App;
