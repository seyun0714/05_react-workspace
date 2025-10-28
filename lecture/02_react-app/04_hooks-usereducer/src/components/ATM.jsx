import { useReducer, useState } from "react";
import atmReducer from "../reducers/atmReducer";

function ATM() {
  const [input, setInput] = useState(0);
  const [account, dispatch] = useReducer(atmReducer, {
    accountID: "123-456-789",
    balance: 100000,
  });

  const checkValidInput = () => {
    if (!input) {
      alert("금액을 입력해주세요.");
      return false;
    }
    return true;
  };

  const checkEnoughMoney = () => {
    if (account.balance - parseInt(input) < 0) {
      alert("잔액 부족");
      return false;
    }
    return true;
  };

  const handleClickDeposit = () => {
    if (!checkValidInput()) return;
    dispatch({ type: "DEPOSIT", payload: input });
  };

  const handleClickWithdraw = () => {
    if (!checkValidInput()) return;
    if (!checkEnoughMoney()) return;
    dispatch({ type: "WITHDRAW", payload: input });
    setInput(0);
  };

  return (
    <>
      <h2>현재 계좌 번호: {account.accountID}</h2>
      <h2>현재 계좌 잔액: {account.balance}원</h2>
      <input
        type="number"
        placeholder="금액을 입력하세요."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClickDeposit}>입금</button>
      <button onClick={handleClickWithdraw}>출금</button>
    </>
  );
}

export default ATM;
