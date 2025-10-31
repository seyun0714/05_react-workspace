import { useEffect } from 'react';
import { getProducts } from '../../api/productApi';
import Product from '/src/features/product/Product';
import Cart from '/src/features/cart/Cart';
import './MainPage.css';

function MainPage() {
  return (
    <div className="mainpage">
      {/* <!-- 상품 목록 컴포넌트 --> */}
      <Product />
      {/* <!-- 장바구니 컴포넌트 --> */}
      <Cart />
    </div>
  );
}

export default MainPage;
