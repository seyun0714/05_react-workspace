import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import Product from "/src/features/product/Product";
import Cart from "/src/features/cart/Cart";
import "./MainPage.css";

function MainPage() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState({
    totalNum: 0,
    totalPrice: 0,
    basketList: [],
  });

  // basketItem:  {id, name, price, quantity}

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleClickAdd = (product) => {
    const targetIndex = basket.basketList.findIndex(
      (item) => item.id === product.id
    );
    if (targetIndex === -1) {
      // 장바구니에 없다면 basketList에 새로 추가
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      setBasket((prev) => {
        return {
          totalNum: prev.totalNum + 1,
          totalPrice: prev.totalPrice + product.price,
          basketList: [...prev.basketList, newItem],
        };
      });
    } else {
      // 장바구니에 이미 있으면 quantity 업데이트
      const updatedList = basket.basketList.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setBasket((prev) => {
        return {
          totalNum: prev.totalNum + 1,
          totalPrice: prev.totalPrice + product.price,
          basketList: updatedList,
        };
      });
    }
  };

  const handleClickDelete = (cartItem) => {
    setBasket((prev) => {
      return {
        totalNum: prev.totalNum - cartItem.quantity,
        totalPrice: prev.totalPrice - cartItem.price * cartItem.quantity,
        basketList: prev.basketList.filter((item) => item.id !== cartItem.id),
      };
    });
  };

  const handleClickDeleteAll = () => {
    if (confirm("장바구니에 있는 모든 목록을 삭제하시겠습니까?")) {
      setBasket({
        totalNum: 0,
        totalPrice: 0,
        basketList: [],
      });
    }
  };

  const handleClickPlus = (cartItem) => {
    const updatedList = basket.basketList.map((item) => {
      if (item.id === cartItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setBasket((prev) => {
      return {
        totalNum: prev.totalNum + 1,
        totalPrice: prev.totalPrice + cartItem.price,
        basketList: updatedList,
      };
    });
  };

  const handleClickMinus = (cartItem) => {
    const target = basket.basketList.find((item) => item.id === cartItem.id);

    // 하나밖에 남지 않았을 때는, 완전히 삭제
    if (target.quantity - 1 === 0) {
      handleClickDelete(cartItem);
      return;
    }

    // 아니라면 수량 및 총 금액, 총 개수 업데이트
    const updatedList = basket.basketList.map((item) => {
      if (item.id === cartItem.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setBasket((prev) => {
      return {
        totalNum: prev.totalNum - 1,
        totalPrice: prev.totalPrice - cartItem.price,
        basketList: updatedList,
      };
    });
  };

  return (
    <div className="mainpage">
      {/* <!-- 상품 목록 컴포넌트 --> */}
      <Product products={products} handleClickAdd={handleClickAdd} />
      {/* <!-- 장바구니 컴포넌트 --> */}
      <Cart
        basket={basket}
        handleClickDelete={handleClickDelete}
        handleClickDeleteAll={handleClickDeleteAll}
        handleClickPlus={handleClickPlus}
        handleClickMinus={handleClickMinus}
      />
    </div>
  );
}

export default MainPage;
