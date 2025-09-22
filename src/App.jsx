import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FetchItems from "./components/FetchItems";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Cart from "./pages/CartPage";
import Hero from "./pages/Hero";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      {/* If FetchItems does not force any layout issues, you can keep it here. */}
      <FetchItems />

      {/* Full-width Navbar (sticky or not, as you prefer) */}
      <Navbar />

      {/* Constrain main content width and center it */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {/* Full-width Footer, or wrap it in the same container if you want */}
      <Footer />
    </Router>
  );
}

export default App;
