import { Outlet } from "react-router-dom";

function MenuLayout() {
  return (
    <div className="menu page">
      <h2>Our Menu</h2>
      <Outlet />
    </div>
  );
}
export default MenuLayout;
