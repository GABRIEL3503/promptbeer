
import './App.css'
import Hero from './Hero';
import TermsAndConditions from './TermsAndConditions';
import Historia from './historia';

import CouponGenerator from './CouponGenerator';
import BreweryInfo from './BreweryInfo';

function App() {
 
  return (
    <div className="App">
       <Hero />
       <BreweryInfo />
       <Historia />
    <TermsAndConditions />
    <CouponGenerator />
  </div>
  )
}

export default App
