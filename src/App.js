import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import BeachCamPage from './pages/BeachCamPage';
import ContactPage from './pages/ContactPage';
import SingleProduct from './pages/SingleProduct';
import CartPage from './pages/CartPage';
import Registration from './pages/Registration';
import Login from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import { useGlobalContext } from './context/cart_context';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="beachcam" element={<BeachCamPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
