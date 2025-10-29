import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import Setting from "./components/Setting";
import Analytics from "./components/Analytics";
function App() {
  return (
    <div>
      <nav style={{ backgroundColor: "black", color: "white", height: "60px" }}>
        <Link to="/">홈</Link> | <Link to="/dashboard">대시보드</Link>
      </nav>
      <main style={{ padding: "20px" }}>
        <h2>메인 컨텐츠</h2>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="setting" element={<Setting />}></Route>
            <Route path="analytics" element={<Analytics />}></Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

/*
  1. 중첩 라우팅(Nested Routing)
    1) 부모 라우트 컴포넌트 안에서 자식 라우트 컴포넌트를 정의하는 방식입니다. 
    2) 중첩 경로 작성시 슬래시(/)로 시작하지 않도록 주의합니다. (중첩 경로는 부모 경로에 상대 경로로 자식 경로를 표현합니다.)

  2. <Outlet>
    1) 중첩된 라우팅 구조에서 자식 라우트 컴포넌트가 렌더링되는 위치를 지정하는 컴포넌트입니다.
    2) Outlet에 표현되는 자식 라우트 컴포넌트로 Context를 통해 데이터를 전달할 수 있습니다.
    3) 자식 라우트 컴포넌트에서는 useOutletContext() 훅을 사용하여 Context에 저장된 데이터를 읽을 수 있습니다.
*/
