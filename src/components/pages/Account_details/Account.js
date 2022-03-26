import React, { useState } from 'react';
import Balance from '../../main/Balance';
import './account.css'

export default function Account() {

    const [addr, setAddr] = useState('');
    // var inputTag = document.querySelector(".address-trans");
    // inputTag.addEventListener("keydown", function (event) {
    //     if (event.keyCode === 13) {
    //         event.preventDefault();
    //         document.getElementById("myBtn").click();
    //     }
    // });

    return (
        <div className='address-main'>
            <div className='address-trans-top'>
                <input type="text" className='address-trans' placeholder='Enter the Account Address' />
                <button id='myBtn' onClick={() => {
                    var address1 = document.querySelector('.address-trans').value
                    setAddr(address1);
                }}>
                    Show Account Info
                </button>
                {addr && <Balance addr={addr} />}
            </div>
        </div>
    )
}
