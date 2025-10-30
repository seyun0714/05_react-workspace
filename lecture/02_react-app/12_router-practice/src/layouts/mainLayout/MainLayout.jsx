import { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { PageContext } from "../../context/pageContext";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="app">
      <PageContext.Provider value={{ isDark, setIsDark }}>
        <Header />
        <main className={`content ${isDark && "dark-mode"}`}>
          <Outlet />
        </main>
        <Footer />
      </PageContext.Provider>
    </div>
  );
}

export default MainLayout;
