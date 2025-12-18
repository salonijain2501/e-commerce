import logo from './logo.svg';
import './App.css';
import Navigation from './Costomer/Component/Navigation/Navigation';
import HomePage from './Costomer/Pages/HomePage/HomePage';
import { Footer } from './Costomer/Component/Footer/Footer';
import Product from './Costomer/Component/Product/Product';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
