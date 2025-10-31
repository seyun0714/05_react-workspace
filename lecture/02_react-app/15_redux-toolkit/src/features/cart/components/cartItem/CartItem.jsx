import { useContext } from "react";
import "./CartItem.css";
import { BasketContext } from "../../../../context/basketContext";

function CartItem({ item }) {
  const { basketDispatch } = useContext(BasketContext);

  const handleClickDelete = (item) => {
    basketDispatch({ type: "DELETE", payload: item });
  };

  const handleClickPlus = (item) => {
    basketDispatch({ type: "PLUS", payload: item });
  };

  const handleClickMinus = (item) => {
    basketDispatch({ type: "MINUS", payload: item });
  };

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p className="cart-item-price">
          {item.price.toLocaleString("ko-KR")}원
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
