import React, {useState} from 'react';
import "./input1.css" ;
import getRandomInt from './randomsame';




export default function Input1() {
    const[rand,setRand]=useState([])
    const[dataam,setDataam]=useState(null)
    const[datamin,setDatamin]=useState(null)
    const[datamax,setDatamax]=useState(null)
    const[print,setPrint]=useState(false)

function GetDataam (val) {
        setDataam(val.target.value)
        setPrint(false)
    }
function GetDatamin (val) {
        setDatamin(val.target.value)
        setPrint(false)
    }
function GetDatamax (val) {
        setDatamax(val.target.value)
        setPrint(false)
    }


function Submitt(event) {
    if (dataam==null){
        event.preventDefault()
    } else {
    if (dataam >0){
        setPrint(true)
        event.preventDefault()
        setRand(getRandomInt(datamin,datamax,dataam))
        } else{
            setPrint(false)
            }
        }
}
    

    return(
        <div class="window">
            <h1 class="Texto">ENTER THE AMOUNT OF NUMBERS</h1>
            <form class="test">
            <input type="number" class="amount" id="first" name="Amount" placeholder="Enter the amount of numbers" onChange={GetDataam} min="1"></input>
            <h1 class="range">specify a range of numbers </h1>
            <input type="number" class="minimum" id="minimum" name="Minimum" placeholder="from" onChange={GetDatamin}></input>
            <input type="number" class="maximum" id="maximum" name="Maximum" placeholder="to" onChange={GetDatamax}></input>
            <button type="submit" class="buttonam" id="second" onClick={Submitt}>RANDOM</button>
            {
                print?
                    <h1 class="result">{rand}</h1>
                :null
            }
            </form>
        </div>
    )
}


