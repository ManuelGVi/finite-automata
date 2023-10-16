'use client'
import React, { useState } from 'react';

const matrizDeTransicion = [
  // 'a'   'b'
  [1, 0], // Estado 0
  [2, 0], // Estado 1
  [2, 3], // Estado 2
  [2, 4], // Estado 3
  [4, 4], // Estado 4
];


class AFD {
  inicio(p) {
    const c = p.split('');
    let estado = 0;

    for (let i = 0; i < c.length; i++) {
      if (c[i] === 'a') {
        estado = matrizDeTransicion[estado][0];
      } else if (c[i] === 'b') {
        estado = matrizDeTransicion[estado][1];
      }
    }

    if (estado === 4) {
      return "Estado aceptado";
    } else {
      return "Estado no aceptado";
    }
  }
}


const Ejercicio02 = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultado, setResultado] = useState("");
  const automata = new AFD();

  const verificar = () => {
    // Validación para asegurarse de que solo se ingresen 'a' y 'b'
    const validChars = /^[ab]*$/;
    if (!validChars.test(inputValue)) {
      setResultado("Cadena inválida. Solo se permiten 'a' y 'b'.");
    } else {
      const res = automata.inicio(inputValue);
      setResultado(res);
    }
  }

  return (
    <div>
      <div>Ejercicio02</div>
      <div>Este automata solo acepta las letras a,b y cadenas que contengan abba,</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingrese una cadena (solo 'a' y 'b')"
        className='text-black'
      />
      <button onClick={verificar} className='bg-slate-400'>Verificar</button>
      <div>Resultado: {resultado}</div>
    </div>
  );
}

export default Ejercicio02;

