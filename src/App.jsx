import Cart from "./components/cart/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import ProductList from "./components/product_list/index.jsx";
import Footer from "./components/Footer/index.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Cart />
      <Footer />
    </div>
  );
}
