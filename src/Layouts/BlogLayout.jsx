import { Outlet } from "react-router-dom";
import "../styles/blogLayout.scss";

function BlogLayout() {
  return (
    <div className="blog-layout">
      <Outlet />
    </div>
  );
}
export default BlogLayout;
