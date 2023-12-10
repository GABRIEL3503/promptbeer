// BreweryInfo.js
import React from 'react';
import BreweryImage from '../src/assets/historia.jpg'; // Asegúrate de que la ruta es correcta

function historia() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className=" font-bold text-gray-300 mb-4 text-center md:text-left">HISTORIA Y PROCESO DE ELABORACIÓN</h1>
        <div id='contain-historia' className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
         
          <div  className="cont-text md:w-1/2">
            <p className="text-gray-300">
            En Prompt, redefinimos la elaboración cervecera, fusionando métodos tradicionales con innovaciones de la inteligencia artificial y la robótica.  <strong className='color'> <br />El resultado: una cerveza excepcional que define el futuro de la tradición cervecera       </strong>     </p>
          </div>
  
          {/* Imagen */}
          <div className="md:w-1/2">
            <img id='beer' src={BreweryImage} alt="Imagen de la Cervecería" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    );
  }
  
  export default historia;
