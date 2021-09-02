import React from 'react'

export default function Footer(){

    const $ul={
        width: '100%',
        height: '150px',
        listStyle: 'none'
    }

    const $li={
        textDecoration: 'none',
        color: 'white'
    }

    return(
        <footer>
            <ul style={$ul}>
                <li style={$li}>menor 18.5 = Abaixo do peso</li>
                <li style={$li}>de 18.6 a 24.9 = Peso Ideal</li>
                <li style={$li}>de 25.0 a 29.9 = leve sobrepeso</li>
                <li style={$li}>de 30 a 34.9 = Obesidade grau I</li>
                <li style={$li}>de 35 a 35.9 = Obesidade grau II</li>
                <li style={$li}>maior 40 = Obesidade grau III</li>
            </ul>
        </footer>
    )
}