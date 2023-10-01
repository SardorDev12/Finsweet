import { Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <div className="blog page">
      <h2>Our Blog</h2>
      <Outlet />
    </div>
  );
}
export default BlogLayout;
