import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { Outlet } from "react-router-dom";

function GlobalLayout() {
  return (
    <div className="global-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default GlobalLayout;
