import HeroImage from '../src/assets/HERO-FINAL.jpg';

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="hero-text">
     <button>🦾 CHATEA CON NUETRRA IA</button>
        {/* Otros elementos que desees centrar */}
      </div>
    </div>
  );
}

export default Hero;
