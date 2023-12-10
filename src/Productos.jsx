// BreweryInfo.js
import React from 'react';
import BreweryImage from '../src/assets/lista.jpg'; // Asegúrate de que la ruta es correcta

function Productos() {
    return (
      <div className="container"> {/* Envoltura externa agregada */}
      <div className="contain mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Variedades que Inspiran</h1>
      <div id='contain' className="cart flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        
        <div className="cont-text md:w-1/2">
          <p className="text-gray-700 text-lg">
            <strong className='color'>
            Saborea la fusión de la tradición cervecera y la tecnología</strong>
          </p>
    
          {/* Lista de cervezas como tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          
  <div className="card bg-white rounded-lg p-4 shadow-lg">
    <h3 className="cer font-bold">Prompt Byte IPA</h3>
    <p className="text-gray-600">Sabor: Cítrico, floral, con toque amargo - Alcohol: 6.5%</p>
  </div>

  {/* Tarjeta para Code Lager */}
  <div className="card bg-white rounded-lg p-4 shadow-lg">
    <h3 className=" cer font-bold">Code Lager</h3>
    <p className="text-gray-600">Sabor: Suave, fresca, ligeramente maltosa - Alcohol: 4.8%</p>
  </div>

  {/* Continúa para las demás cervezas */}
  {/* Tarjeta para AI Ale */}
  <div className="card bg-white rounded-lg p-4 shadow-lg">
    <h3 className="cer font-bold">AI Ale</h3>
    <p className="text-gray-600">Sabor: Frutal, balanceado, toque caramelo - Alcohol: 5.2%</p>
  </div>

          </div>
        </div>
    
        {/* Imagen */}
        <div className="cont-imag">
          <img id='beer' src={BreweryImage} alt="Imagen de la Cervecería" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
    </div> 
    );
}

export default Productos;
