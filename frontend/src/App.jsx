import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Products from "./pages/Products"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import ProductPage from "./pages/ProductPage";



function App() {
  
  return (
<BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
