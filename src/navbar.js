import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './home.js';
import Ex1 from './ex1.js';
import Ex2 from './ex2.js';
import Ex3 from './ex3.js';
import Ex4 from './ex4.js';
import Ex5 from './ex5.js';
import Ex6 from './ex6.js';
import Ex7 from './ex7.js';
import Ex8 from './ex8.js';
import Ex9 from './ex9.js';
import UImodeling from './uimodeling';
import ProfileView from './profile';
import SettingsView from './settings';
import HomeView from './homeview';


class Navbar extends React.Component{
    render() {
        return (
          <div className = "menu">
            <BrowserRouter>
              <nav id = "nav">
                <header className="App-header">
                  <ul>
                    <li className="link"><Link className="link" to="/">Home</Link></li>
                    <li className="link"><Link className="link" to="/exercise1">Exercise 1</Link></li>
                    <li className="link"><Link className="link" to="/exercise2">Exercise 2</Link></li>
                    <li className="link"><Link className="link" to="/exercise3">Exercise 3</Link></li>
                    <li className="link"><Link className="link" to="/exercise4">Exercise 4</Link></li>
                    <li className="link"><Link className="link" to="/exercise5">Exercise 5</Link></li>
                    <li className="link"><Link className="link" to="/exercise6">Exercise 6</Link></li>
                    <li className="link"><Link className="link" to="/exercise7">Exercise 7</Link></li>
                    <li className="link"><Link className="link" to="/exercise8">Exercise 8</Link></li>
                    <li className="link"><Link className="link" to="/exercise9">Exercise 9</Link></li>
                    <li className="link"><Link className="last" to="/uimodeling">UI Modeling</Link></li>
                  </ul>
                </header> 
              </nav>
              <div>
                <Routes>
                  <Route path="/" element ={<Home/>}></Route>
                  <Route path="/exercise1" element ={<Ex1/>}></Route>
                  <Route path="/exercise2" element={<Ex2/>}></Route>
                  <Route path="/exercise3" element={<Ex3/>}></Route>
                  <Route path="/exercise4" element={<Ex4/>}></Route>
                  <Route path="/exercise5" element={<Ex5/>}></Route>
                  <Route path="/exercise6" element={<Ex6/>}></Route>
                  <Route path="/exercise7" element={<Ex7/>}></Route>
                  <Route path="/exercise8" element={<Ex8/>}></Route>
                  <Route path="/exercise9" element={<Ex9/>}></Route>
                  <Route path="/uimodeling" element={<UImodeling/>}>
                    <Route path="homeview" element={<HomeView/>}></Route>
                    <Route path="profile" element={<ProfileView/>}></Route>
                    <Route path="settings" element={<SettingsView/>}></Route>
                  </Route>
               </Routes>
              </div>   
              <footer className="App-footer">©Viktoriia Sakomaa, 2022</footer>
            </BrowserRouter>
          </div>
        );
    }
}

export default Navbar;