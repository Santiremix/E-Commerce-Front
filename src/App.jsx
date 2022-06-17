import './App.scss';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
