// BreweryInfo.js
import React from 'react';
import BreweryImage from '../src/assets/img-cerv.jpg'; // Asegúrate de que la ruta es correcta

function BreweryInfo() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className=" font-bold text-gray-300 mb-4 text-center md:text-left"> La CERVEZA DEL FUTURO<strong className='color'> HOY</strong></h1>
        <div id='contain' className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
         
          <div  className="cont-text md:w-1/2">
            <p className="text-gray-300">
            Bienvenido al mundo de <strong className='color'> Prompt </strong> , donde la pasión por la cerveza se encuentra con la vanguardia de la tecnología.  
            </p>
          </div>
  
          {/* Imagen */}
          <div className="cont-imag">
            <img id='beer' src={BreweryImage} alt="Imagen de la Cervecería" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    );
  }
  
  export default BreweryInfo;
