import { getProducts } from '../../api/productApi';
import ProductItem from './components/productItem/ProductItem';
import './Product.css';
import { useState, useEffect } from 'react';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

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
