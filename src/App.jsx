
import './App.css'
import Hero from './Hero';
import TermsAndConditions from './TermsAndConditions';
import CouponGenerator from './CouponGenerator';
import BreweryInfo from './BreweryInfo';

function App() {
 
  return (
    <div className="App">
       <Hero />
       <BreweryInfo />
    <TermsAndConditions />
    <CouponGenerator />
  </div>
  )
}

export default App
