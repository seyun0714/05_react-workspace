function atmReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + parseInt(action.payload) };
    case "WITHDRAW":
      return { ...state, balance: state.balance - parseInt(action.payload) };
  }
}

export default atmReducer;
