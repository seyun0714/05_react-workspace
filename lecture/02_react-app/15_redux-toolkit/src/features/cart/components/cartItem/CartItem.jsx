import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../../../stores/cartSlice';
import './CartItem.css';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleClickDelete = (item) => {
    dispatch(removeFromCart({ item }));
  };

  const handleClickPlus = (item) => {
    dispatch(increaseQuantity({ item }));
  };

  const handleClickMinus = (item) => {
    dispatch(decreaseQuantity({ item }));
  };

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p className="cart-item-price">
          {item.price.toLocaleString('ko-KR')}원
        </p>
      </div>

      <div className="cart-item-controls">
        <button
          className="cart-item-quantity-button"
          onClick={() => handleClickMinus(item)}
        >
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button
          className="cart-item-quantity-button"
          onClick={() => handleClickPlus(item)}
        >
          +
        </button>

        <button
          className="cart-item-remove-button"
          onClick={() => handleClickDelete(item)}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default CartItem;
