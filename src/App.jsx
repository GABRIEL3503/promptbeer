
import './App.css'
import Hero from './Hero';
import TermsAndConditions from './TermsAndConditions';
import Historia from './historia';
import Productos from './Productos';
import CouponGenerator from './CouponGenerator';
import BreweryInfo from './BreweryInfo';

function App() {
 
  return (
    <div className="App">
       <Hero />
       <BreweryInfo />
       <Historia />
       <Productos />
    <TermsAndConditions />
    <CouponGenerator />
  </div>
  )
}

export default App
