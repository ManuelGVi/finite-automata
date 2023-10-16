import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='p-8 bg-blue-500 text-center'>
      <h1>AUTÓMATAS FINITOS DETERMINISTAS</h1>
      <nav>
        <ul className='list flex justify-center items-center space-x-4'>
        <div className="list-item">
            <li className='cursor-pointer hover:text-white hover:bg-yellow-600'><Link href={'/'}>Inicio</Link></li>
          </div>
          <div className="list-item">
            <li className='cursor-pointer hover:text-white hover:bg-yellow-600'><Link href={'/ejercicio01'}>Ejercicio01</Link></li>
          </div>
          <div className="list-item">
          <li className='cursor-pointer hover:text-white hover:bg-yellow-600'><Link href={'/ejercicio02'}>Ejercicio02</Link></li>
          </div>
          <div className="list-item">
          <li className='cursor-pointer hover:text-white hover:bg-yellow-600'><Link href={'/ejercicio03'}>Ejercicio03</Link></li>
          </div>
          <div className="list-item">
          <li className='cursor-pointer hover:text-white hover:bg-yellow-600'><Link href={'/ejercicio04'}>Ejercicio04</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;