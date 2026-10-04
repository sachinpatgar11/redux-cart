import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import { useSelector } from "react-redux";

import Header from "./components/Header";
import Loader from "./components/Loader";
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

const App = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <BrowserRouter>
      <div className={`app ${theme}`}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/products" replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
