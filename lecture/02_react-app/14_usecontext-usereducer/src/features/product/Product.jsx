import ProductItem from "./components/productItem/ProductItem";
import "./Product.css";

function Product({ products, handleClickAdd }) {
  return (
    <div className="product">
      <h2>상품 목록</h2>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              handleClickAdd={handleClickAdd}
            />
          ))
        ) : (
          <div>등록된 상품이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default Product;
