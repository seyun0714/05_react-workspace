import "./ProductItem.css";

function ProductItem({ product, handleClickAdd }) {
  return (
    <div className="product-item">
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price.toLocaleString("ko-KR")}원</p>
      <button
        className="product-add-button"
        onClick={() => handleClickAdd(product)}
      >
        장바구니에 추가
      </button>
    </div>
  );
}

export default ProductItem;
