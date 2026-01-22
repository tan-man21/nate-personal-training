import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import OnlineTraining from './components/OnlineTraining';
import About from './components/About';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

function App() {

  useEffect(() => {
    AOS.init({
      startEvent: 'load',
    });
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <NavBar />
              <HomePage />
              <Footer />
            </Fragment>
          } />
          <Route path='/online-training' element={<OnlineTraining />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;