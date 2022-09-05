import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import BeachCamPage from './pages/BeachCamPage';
import SingleProduct from './pages/SingleProduct';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="beachcam" element={<BeachCamPage />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
