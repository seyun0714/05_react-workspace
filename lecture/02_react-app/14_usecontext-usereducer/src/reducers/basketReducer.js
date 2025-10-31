export default function basketReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return handleAdd(state, action.payload);
    }
    case "DELETE": {
      return handleDelete(state, action.payload);
    }
    case "DELETE_ALL": {
      return handleDeleteAll();
    }
    case "PLUS": {
      return handlePlus(state, action.payload);
    }
    case "MINUS": {
      return handleMinus(state, action.payload);
    }
    default: {
      return;
    }
  }
}

function handleAdd(state, item) {
  const targetIndex = state.basketList.findIndex(
    (basketItem) => basketItem.id === item.id
  );
  if (targetIndex === -1) {
    // 장바구니에 없다면 basketList에 새로 추가
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };

    return {
      totalNum: state.totalNum + 1,
      totalPrice: state.totalPrice + item.price,
      basketList: [...state.basketList, newItem],
    };
  } else {
    // 장바구니에 이미 있으면 quantity 업데이트
    const updatedList = state.basketList.map((basketItem) => {
      if (basketItem.id === item.id) {
        return { ...basketItem, quantity: basketItem.quantity + 1 };
      }
      return basketItem;
    });
    return {
      totalNum: state.totalNum + 1,
      totalPrice: state.totalPrice + item.price,
      basketList: updatedList,
    };
  }
}
function handleDelete(state, item) {
  return {
    totalNum: state.totalNum - item.quantity,
    totalPrice: state.totalPrice - item.price * item.quantity,
    basketList: state.basketList.filter(
      (basketItem) => basketItem.id !== item.id
    ),
  };
}
function handleDeleteAll() {
  return {
    totalNum: 0,
    totalPrice: 0,
    basketList: [],
  };
}
function handlePlus(state, item) {
  const updatedList = state.basketList.map((basketItem) => {
    if (basketItem.id === item.id) {
      return { ...basketItem, quantity: basketItem.quantity + 1 };
    }
    return basketItem;
  });
  return {
    totalNum: state.totalNum + 1,
    totalPrice: state.totalPrice + item.price,
    basketList: updatedList,
  };
}
function handleMinus(state, item) {
  const target = state.basketList.find(
    (basketItem) => basketItem.id === item.id
  );

  // 하나밖에 남지 않았을 때는, 완전히 삭제
  if (target.quantity - 1 === 0) {
    return handleDelete(state, item);
  }

  // 아니라면 수량 및 총 금액, 총 개수 업데이트
  const updatedList = state.basketList.map((basketItem) => {
    if (basketItem.id === item.id) {
      return { ...basketItem, quantity: basketItem.quantity - 1 };
    }
    return basketItem;
  });
  return {
    totalNum: state.totalNum - 1,
    totalPrice: state.totalPrice - item.price,
    basketList: updatedList,
  };
}
