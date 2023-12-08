// BreweryInfo.js
import React from 'react';
import BreweryImage from '../src/assets/lista.png'; // Asegúrate de que la ruta es correcta

function Productos() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">Variedades que Inspiran</h1>
        <div id='contain' className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
         
          <div className="cont-text md:w-1/2">
            <p className="text-gray-600">
              Explora nuestra selecta gama de cervezas 'Prompt'. Cada variedad, presentada en un empaque distintivo, <strong className='color'>refleja nuestro compromiso con la calidad y la innovación. Saborea la fusión de la tradición cervecera y la tecnología</strong>
            </p>

            {/* Lista de cervezas */}
            <ul className="mt-4">
              <li><strong>Prompt Byte IPA</strong> - Sabor: Cítrico, floral, con toque amargo - Alcohol: 6.5%</li>
              <li><strong>Code Lager</strong> - Sabor: Suave, fresca, ligeramente maltosa - Alcohol: 4.8%</li>
              <li><strong>AI Ale</strong> - Sabor: Frutal, balanceado, toque caramelo - Alcohol: 5.2%</li>
              <li><strong>Cyber Stout</strong> - Sabor: Café intenso, chocolate, robusto - Alcohol: 7.0%</li>
              <li><strong>Pixel Pilsner</strong> - Sabor: Crisp, herbal, refrescante - Alcohol: 4.5%</li>
              <li><strong>Tech Hops Bock</strong> - Sabor: Tostado, especiado, sutil dulzura - Alcohol: 6.8%</li>
              <li><strong>Quantum Wheat</strong> - Sabor: Suave, trigo, notas cítricas - Alcohol: 5.0%</li>
              <li><strong>Neural Net Porter</strong> - Sabor: Maltas oscuras, rico, complejo - Alcohol: 6.2%</li>
            </ul>
          </div>
  
          {/* Imagen */}
          <div className="md:w-1/2">
            <img id='beer' src={BreweryImage} alt="Imagen de la Cervecería" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    );
}

export default Productos;
