import React, { useState } from 'react';
import SmartContract from '../../main/SmartContract';
import './coin.css'

export default function Coin() {

    const [coinAddr, setCoinAddr] = useState('');

    return (
        <div className='address-main'>
            <div className='address-coin-top'>
                <input type="text" className='address-coin' placeholder='Enter the Coin Address' />
                <button onClick={() => {
                    var address2 = document.querySelector('.address-coin').value
                    setCoinAddr(address2);
                }}>
                    Show Coin Info
                </button>
                {coinAddr && <SmartContract addr={coinAddr} />}
            </div>
        </div>
    )
}
