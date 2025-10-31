import "./CartItem.css";

function CartItem({
  item,
  handleClickDelete,
  handleClickPlus,
  handleClickMinus,
}) {
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
