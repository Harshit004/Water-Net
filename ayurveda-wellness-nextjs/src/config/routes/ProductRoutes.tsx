
import { Route } from "react-router-dom";
import Products from "@/pages/Products";

export const ProductRoutes = () => (
  <>
    <Route path="/products" element={<Products />} />
  </>
);
