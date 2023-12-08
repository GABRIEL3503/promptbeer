// BreweryInfo.js
import React from 'react';
import BreweryImage from '../src/assets/historia.png'; // Asegúrate de que la ruta es correcta

function BreweryInfo() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Historia y Proceso de Elaboración </h1>
        <div id='contain-historia' className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
         
          <div  className="cont-text md:w-1/2">
            <p className="text-gray-600">
            Prompt fusiona la artesanía cervecera con la innovación tecnológica. Nuestra IA selecciona los ingredientes premium, mientras que la robótica perfecciona cada fase de la elaboración.  <strong className='color'>El resultado: una cerveza excepcional que define el futuro de la tradición cervecera       </strong>     </p>
          </div>
  
          {/* Imagen */}
          <div className="md:w-1/2">
            <img id='beer' src={BreweryImage} alt="Imagen de la Cervecería" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    );
  }
  
  export default BreweryInfo;
