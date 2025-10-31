import CartItem from './components/cartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../stores/cartSlice';
import './Cart.css';

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleClickDeleteAll = () => {
    if (confirm('장바구니의 모든 목록을 삭제하시겠습니까?')) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>장바구니 ({cart.totalNum})</h2>
        {/* <!-- 장바구니에 담긴 아이템이 있으면 전체 삭제 버튼 표시 --> */}
        {cart.cartList.length > 0 && (
          <button className="cart-clear-button" onClick={handleClickDeleteAll}>
            전체 삭제
          </button>
        )}
      </div>

      {/* <!-- case1. 장바구니가 비어있을 경우 -----------> */}
      {cart.cartList.length === 0 && (
        <p className="cart-empty">장바구니가 비어있습니다</p>
      )}

      {/* <!-- case2. 장바구니에 아이템이 있을 경우 ------> */}
      {cart.cartList.length > 0 && (
        <div className="cart-items">
          {/* <!-- 장바구니 아이템(CartItem)들 배치 자리 --> */}
          {cart.cartList.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}

      <div className="cart-summary">
        <div className="cart-total">
          <span>총 금액:</span>
          <span className="cart-total-price">
            {cart.totalPrice.toLocaleString('ko-KR')}원
          </span>
        </div>
        <button className="cart-order-button">주문하기</button>
      </div>
      {/* <!-- --------------------------------------- --> */}
    </div>
  );
}

export default Cart;
