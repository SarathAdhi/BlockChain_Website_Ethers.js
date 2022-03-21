import React from 'react';
import './about.css'

export default function About() {
    return (
        <div className='about-page'>
            <div className='about-section-1'>
                <h3>Hii there, I am Sarath Adhithya. I am a Full-Stack Web developer and I am learning blockchain. <a href='https://sarathadhi.netlify.app/' target='_blank' rel="noreferrer">My portfolio</a></h3>
            </div>

            <div className='about-section-2'>
                <div>
                    <h3>How this website is made</h3>
                    <p>Main thing that connects this website to blockchain is ethers.js and web3.js<br/>The major language used Javascript and solidity</p>
                </div>
                <div>
                    <h3>Tools used to make this website</h3>
                    <p>HTML, CSS, Javascript, React, Ethers.js, Web3.js</p>
                </div>
            </div>

            <div className='about-section-1'>
                <h3>This website is only for demonstration purpose and still under development. Therefore use this only for educational purposes only.</h3>
            </div>
        </div>
    )
}
