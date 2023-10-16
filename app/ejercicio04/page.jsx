'use client'
import React, { useState } from 'react';

const matrizDeTransicion = [
  // 'a'   'b'
  [1, 1], // Estado 0
  [1, 1], // Estado 1
];

class DFA {
  constructor() {
    this.estadoActual = 0; // Estado inicial
  }

  transicion(simbolo) {
    this.estadoActual = matrizDeTransicion[this.estadoActual][simbolo === 'b' ? 1 : 0];
  }

  inicio(cadena) {
    if (cadena.length === 2) {
      this.estadoActual = 0; // Restablece el estado al inicio
      const caracteres = cadena.split('');

      for (let i = 0; i < caracteres.length; i++) {
        this.transicion(caracteres[i]);
      }

      if (this.estadoActual === 1) {
        return "Estado aceptado";
      }
    }

    return "Estado no aceptado";
  }
}



const Ejercicio03 = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultado, setResultado] = useState("");
  const automata = new DFA();

  const verificar = () => {
    // Validación para asegurarse de que solo se ingresen 1 y 0
    const validChars = /^[ab]*$/;
    if (!validChars.test(inputValue)) {
      setResultado("Cadena inválida. Solo se permiten a y b.");
    } else {
      const res = automata.inicio(inputValue);
      setResultado(res);
    }
  }

  return (
    <div>
      <div>Ejercicio03</div>
      <div>Solo se permite ingresar a y b, solo se aceptan cadenas de longitud 2</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingrese una cadena (solo a y b)"
        className='text-black'
      />
      <button onClick={verificar} className='bg-slate-400'>Verificar</button>
      <div>Resultado: {resultado}</div>
    </div>
  );
}

export default Ejercicio03;