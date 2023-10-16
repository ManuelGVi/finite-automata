'use client'
import React, { useState } from 'react';

const matrizDeTransicion = [
  // '0'   '1'
  [0, 1], // Estado 0
  [0, 1], // Estado 1
];

class DFA {
  constructor() {
    this.estadoActual = 0; // Estado inicial
  }

  transicion(simbolo) {
    this.estadoActual = matrizDeTransicion[this.estadoActual][simbolo === '1' ? 1 : 0];
  }

  inicio(cadena) {
    const caracteres = cadena.split('');

    for (let i = 0; i < caracteres.length; i++) {
      this.transicion(caracteres[i]);

      if (this.estadoActual === undefined) {
        return "Estado no aceptado";
      }
    }

    if (this.estadoActual === 1 || this.estadoActual === 0) {
      return "Estado aceptado";
    } else {
      return "Estado no aceptado";
    }
  }
}

const Ejercicio03 = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultado, setResultado] = useState("");
  const automata = new DFA();

  const verificar = () => {
    // Validación para asegurarse de que solo se ingresen '0' y '1' y que la cadena comience con '1'
    if (inputValue.charAt(0) !== '1') {
      setResultado("Cadena inválida. Debe comenzar con '1'.");
    } else {
      const validChars = /^[01]*$/;
      if (!validChars.test(inputValue)) {
        setResultado("Cadena inválida. Solo se permiten '0' y '1'.");
      } else {
        const res = automata.inicio(inputValue);
        setResultado(res);
      }
    }
  }

  return (
    <div>
      <div>Ejercicio03</div>
      <div>Solo se permiten 1 y 0, este automata solo acepta cadenas que inician con 1</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingrese una cadena (comenzando con '1' y solo '0' y '1')"
        className='text-black'
      />
      <button onClick={verificar} className='bg-slate-400'>Verificar</button>
      <div>Resultado: {resultado}</div>
    </div>
  );
}

export default Ejercicio03;
