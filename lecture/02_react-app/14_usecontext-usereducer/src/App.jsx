import { useState } from "react";
import { BasketContext } from "./context/basketContext";
import { ProductContext } from "./context/productContext";
import MainPage from "./pages/mainPage/MainPage";
import { useReducer } from "react";
import basketReducer from "./reducers/basketReducer";
import "./App.css";

function App() {
  const [basket, basketDispatch] = useReducer(basketReducer, {
    totalNum: 0,
    totalPrice: 0,
    basketList: [],
  });
  const [products, setProducts] = useState([]);

  const productsValue = { products, setProducts };
  const basketValue = { basket, basketDispatch };
  return (
    <>
      <ProductContext.Provider value={productsValue}>
        <BasketContext.Provider value={basketValue}>
          <MainPage />
        </BasketContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

export default App;
