import React, { useState } from 'react';
import Balance from '../../main/Balance';
import './account.css'

export default function Account() {

    const [addr, setAddr] = useState('');

    return (
        <div className='address-main'>
            <div className='address-trans-top'>
                <input type="text" className='address-trans' placeholder='Enter the Account Address' />
                <button onClick={() => {
                    var address1 = document.querySelector('.address-trans').value
                    setAddr(address1);
                }}>
                    Show Balance
                </button>
                {addr && <Balance addr={addr} />}
            </div>
        </div>
    )
}
