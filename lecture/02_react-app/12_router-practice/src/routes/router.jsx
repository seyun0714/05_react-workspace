import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Menus from "../pages/menus/Menus";
import MenuDetail from "../pages/menuDetail/MenuDetail";
import MenuSearchResult from "../pages/menuSearchResult/MenuSearchResult";
import MainLayout from "../layouts/mainLayout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "menus",
        children: [
          {
            index: true,
            element: <Menus />,
          },
          {
            path: ":id",
            element: <MenuDetail />,
          },
          {
            path: "search",
            element: <MenuSearchResult />,
          },
        ],
      },
    ],
  },
]);

/*
  1. createBrowserRouter()
    1) React Router v6.4에서 도입된 새로운 라우터 생성 함수입니다.
    2) 기존 <BrowserRouter>보다 더 많은 기능을 제공하고, 객체 기반의 라우트 구성이 가능합니다.
    3) <RouterProvider>와 함께 사용합니다.
    4) loader 기능을 통해 컴포넌트가 렌더링되기 전에 데이터를 가져올 수 있습니다.
    5) 해당 loader로 가져온 데이터는 컴포넌트에서 useLoaderData() 훅으로 가져올 수 있습니다.
*/
