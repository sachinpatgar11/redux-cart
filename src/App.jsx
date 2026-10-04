import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Header from "./components/Header";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <Header />

        <Routes>
          <Route path="/products" element={<Products />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
