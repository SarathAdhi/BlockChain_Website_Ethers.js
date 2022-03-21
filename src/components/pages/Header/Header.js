import React, { useState } from 'react';
import './header.css'

export default function Header() {

    const [isopen, setIsopen] = useState(false)

    return (
        <div className='header'>
            <h3 className='mobile-logo'>BlocksInfo</h3>
            <img onClick={() => {
                setIsopen(!isopen)
                console.log(isopen)
            }} className='mobile-menu' src={require('../../../assets/mobile-menu.png')} alt=''/>
            {isopen && (
                <div className='side-menu'>
                    <a href='/'>Home</a>
                    <a href='/account-details'>Account Details</a>
                    <a href='/coin-details'>Coin Details</a>
                    <a href='/about'>About</a>
                </div>
            )}
            <div className='header-navlinks'>
                <a href='/'>Home</a>
                <a href='/account-details'>Account Details</a>
                <a href='/coin-details'>Coin Details</a>
                <a href='/about'>About</a>
            </div>
        </div>
    )
}
