
import './App.css';
import About from './pages/about/About';
import Comics from './pages/comics/Comics';
import Contact from './pages/contact/Contact';
import Ecommerce from './pages/ecommerce/Ecommerce';
import Home from "./pages/home/Home.jsx";


function App() {
  return (
    <div className="App">
    <Home/>
    <About/>
    <Comics/>
    <Ecommerce/>
    <Contact/>
     
    </div>
  );
}

export default App;
