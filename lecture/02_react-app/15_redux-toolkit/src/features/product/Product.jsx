import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import ProductItem from "./components/productItem/ProductItem";
import "./Product.css";

function Product() {
  const { products } = useContext(ProductContext);

  return (
    <div className="product">
      <h2 className="productlist-title">상품 목록</h2>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <div>등록된 상품이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default Product;
