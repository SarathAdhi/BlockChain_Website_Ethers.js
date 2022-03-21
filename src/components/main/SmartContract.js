import { ethers } from "ethers";
import React from 'react'

const INFURA_ID = 'b66984880e534014b8664e332d8861eb'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];

const ERC20_ABI2 = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

export default function SmartContract({ addr }) {

    var address = addr // DAI Contract
    const contract = new ethers.Contract(address, ERC20_ABI, provider)
    const contract2 = new ethers.Contract(address, ERC20_ABI2, provider)

    const main = async () => {

        try {
            const name = await contract.name()
            const symbol = await contract.symbol()
            const totalSupply = await contract.totalSupply()
            const block = await provider.getBlockNumber()
            var transferEvents = await contract2.queryFilter('Transfer', block - 1, block)

            var ele = document.querySelector(".coin-details")
            ele.innerHTML = ""
            var newEle = document.createElement('p')
            newEle.innerHTML = "<strong>Name : </strong>" + name + "<br><strong>Symbol : </strong>" + symbol + "<br><strong>Total Supply : </strong>" + totalSupply
            ele.append(newEle)
            
            document.querySelector(".transferEvents").innerHTML = ""

            // var result = Object.entries(JSON.stringify(transferEvents))
            var res = JSON.stringify(transferEvents[0])
            res = res.replace(/[&#+()$~%.'"*?<>{}[]/g, '')
            var result = res.split(',')

            result.forEach((ele, index) => {
                var arr = ele.split(':')
                var newEle = document.createElement('p')
                newEle.className = "address-details"
                newEle.id = "address-details" + index
                if (!arr[1]) {
                    // var lastEle = document.getElementById(pre)
                    // var lastRecord = lastEle.innerHTML
                    newEle.innerHTML = arr[0];
                }
                else {
                    newEle.innerHTML = "<strong>" + arr[0] + ": </strong>" + arr[1]
                }
                document.querySelector(".transferEvents").append(newEle)
            })
        } catch (error) {
            document.querySelector(".name").innerHTML = error;
        }

    }
    main()

    return (
        <>
            <div className="coin-details"></div>
            <div className="transferEvents"></div>
        </>
    )
}



