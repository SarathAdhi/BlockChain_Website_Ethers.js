import React from 'react';
import './home.css'

export default function Home() {
    window.onscroll = function() {
        let scroll = window.scrollY;
        document.querySelector('.nft-img-1').style.left = -scroll+"px"
        document.querySelector('.nft-img-2').style.right = -scroll+"px"
        // console.log(Math.floor(scroll))
        
        if(scroll < 50) {
            document.querySelector('.scroll-down h1').innerHTML = "SCROLL DOWN"
        }
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
            document.querySelector('.scroll-down h1').innerHTML = "SCROLL UP"
        }
    }

    function copyToClipBoard(address) {
        
        var text = address.replace(/ /g, "")
        text = text.split(':')
        if(text.length === 2)
            navigator.clipboard.writeText(text[1]);
        else
            navigator.clipboard.writeText(text[0]);
        
    }
    
    return (
        <>
        <div className='home'>
            <img className='nft-img-1' src={require('../../../assets/home1.png')} rel="noopener" alt=''/>
            <img className='nft-img-2' src={require('../../../assets/home2.png')} rel="noopener" alt=''/>

            <div className='home-section-1'>
                <h2>Hello 👋, This website is similar to <a href='https://etherscan.io/' target='_blank' rel="noreferrer">etherscan.io</a>, Where the website allows you to search through transactions, blocks, wallet addresses, smart contracts, and other on-chain data. Using BlockInfo, enter any Ethereum address into the search box to see the current balance and transaction history of the wallet. No API's from etherscan are used. All the info are extracted directly from Blockchain. <a href='/about'>click here for more info</a></h2>
            </div>
            <div className='home-section-1'>
                <h2>Get the account address from <a href='https://etherscan.io/' target='_blank' rel="noreferrer">etherscan.io</a> for testing and compare the results. Some of the sample address are given below for your reference.</h2>
            </div>
            <div className='scroll-down'>
                <h1>SCROLL DOWN</h1>
            </div>
        </div>
        <div className='height'></div>
        <h2 className='copy-note'>Tap to Copy the Address</h2>
        <div className='sample-address'>
            <div>
                <h2>Account Address</h2>
                <h3 onClick={(event) => { copyToClipBoard(event.target.innerHTML) }}>0x2Ab81e0221B4FB1B3C155A0910a4518C5cBaeB7C</h3>
                <h3 onClick={(event) => { copyToClipBoard(event.target.innerHTML) }}>0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</h3>
                <h3 onClick={(event) => { copyToClipBoard(event.target.innerHTML) }}>0x9b9d0399ab20AcA3AA099B15d1B74a6ebFDB0dfe</h3>
            </div>
            <div>
                <h2>Coin Address</h2>
                <h3 onClick={(event) => { copyToClipBoard(event.target.innerHTML) }}>Tether USD: 0xdAC17F958D2ee523a2206206994597C13D831ec7</h3>
                <h3 onClick={(event) => { copyToClipBoard(event.target.innerHTML) }}>Dai Stablecoin: 0x6B175474E89094C44Da98b954EedeAC495271d0F</h3>
                <h3 onClick={(event) => { copyToClipBoard(event.target.innerHTML) }}>Telcoin: 0x467Bccd9d29f223BcE8043b84E8C8B282827790F</h3>
            </div>
        </div>
        </>
    )
}
