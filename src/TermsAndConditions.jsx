import React from 'react';
import BreweryImage from './assets/qr.png'; // Asegúrate de que la ruta sea correcta

function TermsAndConditions() {
  return (
    <div id="container-tit" className="max-w-4xl mx-auto p-4">
      <h1 className=" text-2xl font-bold pt-0 text-gray-800 mb-4">Bases y Condiciones 📜</h1>
      
      <div id='contain' className=" flex flex-col md:flex-row items-center md:space-x-4">
        <div className=" cont-text md:w-1/2">
          <p className="mt-4 text-gray-600">
            Para que todo el mundo pueda disfrutar de nuestra Cerveza, lanzamos una promo por el mes de Diciembre: 
            <ol className="list-decimal ml-4">
              <li>📝 Valida tus datos.</li>
              <li>🎟️ Genera un cupón.</li>
              <li>📥 Descárgalo.</li>
              <li>📍 Elige tu proveedor más cercano. Retíralo</li>
              <li>🍻 DISFRUTA.</li>
            </ol>
          </p>
          <p className="mt-2 text-gray-600"><strong>Términos y condiciones:</strong> Recuerda que debes ser mayor de 18 años. En caso de generar un Cupón QR, el mismo permanecerá cargado en la página.</p>
        </div>

        <div className="cont-imag md:w-1/2 mt-4 md:mt-0">
          <img id='beer'  src={BreweryImage} alt="Descripción de la Imagen" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
