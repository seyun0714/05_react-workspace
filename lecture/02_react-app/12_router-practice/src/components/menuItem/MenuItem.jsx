import "./MenuItem.css";
import { useNavigate } from "react-router-dom";

function MenuItem({ menu }) {
  const navigate = useNavigate();
  return (
    <div
      className="menuitem"
      onClick={() => navigate(`/menus/${menu.menuCode}`)}
    >
      <div className="menuitem-name">메뉴 명: {menu.menuName}</div>
      <div className="menuitem-price">가격: {menu.menuPrice}</div>
    </div>
  );
}

export default MenuItem;
