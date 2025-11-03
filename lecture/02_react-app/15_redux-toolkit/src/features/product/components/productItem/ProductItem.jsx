import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../stores/cartSlice';
import './ProductItem.css';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleClickAdd = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="product-item">
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price.toLocaleString('ko-KR')}원</p>
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

/*
  4_1. 컴포넌트 - 상태 변경 
    1) 상태 변경을 위해 액션을 디스패치(전달)합니다. 
    2) react-redux의 useDispatch() 훅을 사용합니다. 
    3) 액션 생성자를 import 한 후 액션 생성자 함수를 호출하여 action 객체를 생성합니다.
*/
