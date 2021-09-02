import React from 'react'

export default function Body(){

    var valor = document.querySelectorAll('input')

    const calcular=()=>{
        //Cria uma série de variáveis que serão utilizadas no programa
        //Obtem a input e armazena dentro da variável ´valor´
        var peso, altura, resultado

        //Obtém o peso através do valor inserido na input[0]
        //Obtém a altura através do valor inserido na input[1]
        peso = valor[0].value
        altura = valor[1].value

        //Se o usuário inseriu um valor com pontuação -->
        //Senão -->
        if(altura < 2.30){
            resultado = (peso) / (altura * altura)
            document.querySelector('h2').innerHTML = resultado.toFixed(1)
        } else{
            altura = altura.replace(1, '1.')
            resultado = (peso) / (altura * altura)
            document.querySelector('h2').innerHTML = resultado.toFixed(1)

            valor[1].value = altura
        }
    }

    /*
    EM PROCESSO DE DESENVOLVIMENTO
    const selectPe=()=>{
        valor[0].select()
    }

    const selectAl=()=>{
        valor[1].select()
    }
    */

    const $h2={
        fontFamily: 'Helvetica',
        fontSize: '2.4em',
        color: 'whitesmoke'
    }

    const $input={
        width: '52px',
        height: '25px',
        border: 'none',
        borderRadius: '3px',
        outline: 'none',
        

        fontFamily: 'Helvetica',
        fontSize: '1.2em',
        color: '#3d3d3d'
    }

    const $button={
        width: '85px',
        height: '30px',
        border: 'none',
        borderRadius: '3px',
        background: '#32CD32',

        fontFamily: 'Helvetica',
        color: 'white'
    }

    return(
        <body>
            <h2 style={$h2}>Re!</h2>
            <div className='elementos'>
                <input type='text' defaultValue='peso' style={$input}/>
                <input type='text' defaultValue='altura' style={$input}/>
                <button style={$button} onClick={()=>calcular()}>CALCULAR</button>
            </div>
        </body>
    )
}