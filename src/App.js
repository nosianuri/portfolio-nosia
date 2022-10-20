import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FooterNav from './Components/FooterNav/FooterNav';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/portfolio' exact element={<PortfolioPage />}>
          </Route>
        </Routes>
        <FooterNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
