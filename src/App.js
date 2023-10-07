import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Course from './Course'
import Frontend from './front'
import Blog from './blog'
import Game from './Game'
import Rock from './Tictac'
import Tic from './rock'
import CssQuizGame from './flex'
import FrogGame from './FrogGame'
import Contact from './Contact';
// import Fun from './fun';
import Dice from './dice';
import Signin from "./signin";
import Fun from './Fun'
function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/course" element={<Course />}/>
            <Route path="/frontend" element={<Frontend />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/games" element={<Game />}/>
            <Route path="/rock" element={<Rock />}/>
            <Route path="/tic" element={<Tic />}/>
            <Route path="/flexbox" element={<CssQuizGame/>}/>
            <Route path="/frog"element ={<FrogGame/>}/>
            <Route path="/contact" element={<Contact/>}/>

            <Route path="/fun" element={<Fun/>}/>

            <Route path="/dice"element ={<Dice/>}/>
          </Routes>
     </div>
    </Router>
  );
}

export default App;
