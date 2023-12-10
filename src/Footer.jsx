// Footer.js
import React from 'react';
import LogoImage from '../src/assets/logo..png'; // Corrige la ruta si es necesario

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Espacio para texto */}
               

                {/* Logo */}
                <div className="footcont mb-2 md:mb-0">
                    <img src={LogoImage} alt="Prompt Logo" className="foot h-10" />
                    <div className=" parr mb-2 md:mb-0">
                    <p id='par'> <strong>Términos y condiciones:</strong> Recuerda que debes ser mayor de 18 años para participar. <br /> En caso de generar un Cupón QR, el mismo permanecerá cargado en la página durante 24 hs. <br /> Beber con moderación</p>
                </div>
                </div>

                {/* Iconos de redes sociales */}
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook-square bx-md'></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter bx-md'></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram bx-md'></i></a>
                </div>
            </div>
            <div className="mb-2 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} Prompt Brewery. Todos los derechos reservados.  <a href="https://www.linkedin.com/in/gabriel-medina-frontend/">Gabriel Medina</a></p>
                </div>
        </footer>
    );
}

export default Footer;
