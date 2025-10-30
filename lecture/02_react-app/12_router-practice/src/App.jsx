import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./App.css";

function App() {
  /* 
    /               메인 페이지
    /about          소개 페이지
    /menus          메뉴 목록 페이지
    /menus/:id      메뉴 상세 페이지
    /menus/search   메뉴 검색 페이지
  */

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="menus">
            <Route index element={<Menus />}></Route>
            <Route path=":id" element={<MenuDetail />}></Route>
            <Route path="search" element={<MenuSearchResult />}></Route>
          </Route>
        </Route>
      </Routes> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
