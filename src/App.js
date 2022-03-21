import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from './components/pages/Account_details/Account';
import Coin from './components/pages/Coin_details/Coin';
import Header from './components/pages/Header/Header';
import './App.css'
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/account-details' element={<Account /> } />
                <Route path='/coin-details' element={<Coin /> } />
                <Route path='/about' element={<About /> } />
            </Routes>
        </Router>
    )
}
