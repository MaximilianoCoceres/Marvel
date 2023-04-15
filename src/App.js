
import './App.css';
import Footer from './components/Footer';
import About from './pages/about/About';
import Comics from './pages/comics/Comics';
import Contact from './pages/contact/Contact';
import Home from "./pages/home/Home.jsx";


function App() {
  return (
    <div className="App">
    <Home/>
    <About/>
    <Comics/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
