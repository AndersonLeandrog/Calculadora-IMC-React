import React from 'react'
import Balanca from './img/balanca.png'

export default function Header(){

    const $img={
        width: '65px',
        height: '65px'
    }

    const $h1={
        color: '#3d3d3d'
    }

    return(
        <header>
            <img src={Balanca} style={$img} alt='react'/>
            <h1 style={$h1}>IMCALCULATOR</h1>
        </header>
    )
}