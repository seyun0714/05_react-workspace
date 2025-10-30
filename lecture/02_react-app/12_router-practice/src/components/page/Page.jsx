import { useState } from "react";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { PageContext } from "../../context/pageContext";
import "./Page.css";

function Page() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="page">
      <PageContext.Provider value={{ isDark, setIsDark }}>
        <Header />
        <Content />
        <Footer />
      </PageContext.Provider>
    </div>
  );
}

export default Page;
