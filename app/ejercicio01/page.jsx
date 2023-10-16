'use client'

import React, { useState } from 'react';

class Automata {
    static matriz = [
        [1, 200, 200],
        [1, 1, 200]
    ];

    inicio(p) {
        let i = 0;
        const c = p.split('');
        let estado = 0;
        let caracter = 0;

        while (i < c.length) {
            if (/[a-zA-Z]/.test(c[i])) {
                caracter = 0;
            } else if (/[0-9]/.test(c[i])) {
                caracter = 1;
            } else {
                caracter = 2;
            }

            estado = Automata.matriz[estado][caracter];
            if (estado === 200) {
                break;
            }

            i++;
        }

        if (estado === 1) {
            return "Estado aceptado";
        } else {
            return "Estado no aceptado";
        }
    }
}

const Ejercicio01 = () => {
    const [inputValue, setInputValue] = useState("");
    const [resultado, setResultado] = useState("");
    const automata = new Automata();

    const verificar = () => {
        const res = automata.inicio(inputValue);
        setResultado(res);
    }

    return (
        <div>
            <div>Ejercicio01</div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ingrese una cadena"
                className='text-black'
            />
            <button onClick={verificar} className='bg-slate-400' >Verificar</button>
            <div>Resultado: {resultado}</div>
        </div>
    );
}

export default Ejercicio01;





