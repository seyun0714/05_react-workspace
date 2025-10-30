import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMenuDetail } from "../../api/menuApi";
import "./MenuDetail.css";
import BackButton from "../../components/backButton/BackButton";

function MenuDetail() {
  const { id } = useParams();
  const [menu, setMenu] = useState();

  useEffect(() => {
    setMenu(getMenuDetail(id));
  }, []);

  return (
    <div className="menudetail">
      <div className="menudetail-title">
        메뉴 상세 페이지
        <BackButton />
      </div>
      <div className="separator"></div>
      {menu ? (
        <div className="menu">
          <img
            className="menu-image"
            src={menu.detail.image}
            alt={menu.menuName}
          />
          <div className="menu-name">메뉴 명: {menu.menuName}</div>
          <div className="menu-price">가격: {menu.menuPrice}</div>
          <div className="menu-orderable">
            주문 가능 여부: {menu.isOrderable ? "가능" : "불가능"}
          </div>
          <div className="menu-description">
            상세 설명: {menu.detail.description}
          </div>
        </div>
      ) : (
        <div>조회된 메뉴가 없습니다.</div>
      )}
    </div>
  );
}

export default MenuDetail;
