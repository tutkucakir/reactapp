import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import AddUser from './components/AddUser';
import Users from './components/Users';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from './pages/NotFound';
import Contribute from './pages/Contribute';

const Home = () => {
  return(
    <h3>Home Page</h3>
  )
}

const About = () => {
  return(
    <h3>About Page</h3>
  )
}

class App extends Component {
  render() {    
    return (
      <Router>
        <div className="container">
        <Navbar title='User App'/>
        <Routes>
            <Route path='/' element={<Users />}/>
            <Route path='add' element={<AddUser />}/>
            <Route path='projectfiles' element={<Contribute />}/>
            <Route path='*' exact={true} element={<NotFound />} />
        </Routes>

        </div>
      </Router>
    );
  }
}

export default App;