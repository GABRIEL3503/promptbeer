import HeroImage from '../src/assets/heroimage.png';
import LogoImage from '../src/assets/logo..png'; // Asegúrate de que la ruta es correcta

function Hero() {
  return (
    <div className="relative w-full h-screen bg-no-repeat bg-cover bg-fixed bg-center" 
         style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex justify-center items-center w-full h-full">
        {/* Añade el logo centrado aquí */}
        <img id="logo" src={LogoImage} alt="Logo" className="max-w-xs md:max-w-sm lg:max-w-lg" />
      </div>
    </div>
  );
}
  
  export default Hero;
  