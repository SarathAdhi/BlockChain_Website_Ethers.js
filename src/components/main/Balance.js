import { ethers } from 'ethers'
import React from 'react';

const INFURA_ID = 'b66984880e534014b8664e332d8861eb'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

export default function Balance({addr}) {
    var address = addr
    const getBalance = async () => {
        try {
            const balance = await provider.getBalance(address)
            const res = ethers.utils.formatEther(balance)

            const block = await provider.getBlockNumber()
            const blockInfo = await provider.getBlock(block)
            var res2 = JSON.stringify(blockInfo)
            
            res2 = res2.replace(/[&#+()$~%.'"*?<>{}[]/g, '')
            var result2 = res2.split(',')
            
            result2.forEach((ele, index) => {
                var arr = ele.split(':')
                var newEle = document.createElement('p')
                newEle.className = "address-details"
                newEle.id = "address-details"+index
                if(!arr[1]) {
                    // var lastEle = document.getElementById(pre)
                    // var lastRecord = lastEle.innerHTML
                    // lastEle.innerHTML = lastRecord +', '+ arr[0];
                    newEle.innerHTML = arr[0]
                }
                else {
                    newEle.innerHTML = "<strong>" + arr[0] + ": </strong>" + arr[1]
                }
                document.querySelector(".bal-more-info").append(newEle)
            })

            document.querySelector('.loader').style.display = "none"

            const { transactions } = await provider.getBlockWithTransactions(block)
            console.log(transactions);

            document.querySelector('.bal').innerHTML = "<strong>Balance: </strong>" + res + "<br><br><strong>Block: </strong>" + block 

        } catch (error) {
            document.querySelector('.bal').innerHTML = error + "<br><strong>Enter an valid address</strong>"
            console.log(error)
        }
        
    }
    getBalance()
    
    return (
        <>
        <div className="loader"></div>
        <p className='bal'></p>
        <div  className='bal-more-info'></div>
        </>
    )
}



