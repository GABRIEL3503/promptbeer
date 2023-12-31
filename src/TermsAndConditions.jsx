import React from 'react';
import BreweryImage from './assets/qr.jpg'; // Asegúrate de que la ruta sea correcta

function TermsAndConditions() {
  return (
    <div id="container-tit" className="  p-4">
      <h1 className=" font-bold pt-0 text-gray-300 mb-4">PROMO LANZAMIENTO </h1>
      
      <div id='contain' className=" flex flex-col md:flex-row items-center md:space-x-4">
        <div className=" cont-text md:w-1/2">
          <p className="mt-4 text-gray-300">
            Para que todo el mundo pueda disfrutar de nuestra Cerveza, lanzamos una promo por el mes de Diciembre: 
            <ol className="list-decimal ml-4">
              <li>📝 Valida tus datos.</li>
              <li>🎟️ Genera un cupón.</li>
              <li>📥 Descárgalo.</li>
              <li>📍 Elige tu proveedor más cercano. Retíralo</li>
              <li>🍻 DISFRUTA.</li>
            </ol>
          </p>
         
        </div>

        <div className="cont-imag md:w-1/2 mt-4 md:mt-0">
          <img id='beer'  src={BreweryImage} alt="Descripción de la Imagen" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
