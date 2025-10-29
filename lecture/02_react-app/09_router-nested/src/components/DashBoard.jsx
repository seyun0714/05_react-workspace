import React from "react";
import { Link, Outlet } from "react-router-dom";

function DashBoard() {
  const dashboardData = {
    numOfUsers: 100,
    numOfOrders: 1000,
  };

  return (
    <div>
      <h2>대시보드</h2>

      <div>
        <nav>
          <Link to="">대시보드홈</Link> | <Link to="setting">설정</Link> |{" "}
          <Link to="analytics">분석</Link>
        </nav>
        <h4>대시보드 컨텐츠</h4>
        {/* 중첩 라우팅 된 요소가 Outlet 위치에 렌더링됨 */}
        <Outlet context={dashboardData} />
      </div>
    </div>
  );
}

export default DashBoard;
