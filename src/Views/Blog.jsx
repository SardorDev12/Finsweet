import { useLoaderData } from "react-router-dom";

function Blog() {
  const data = useLoaderData();
  return (
    <div className="sub-blog">
      <ul>
        {data.map((blog) => {
          return <li>{blog.title}</li>;
        })}
      </ul>
    </div>
  );
}
export default Blog;

export const blogLoader = async () => {
  const res = await fetch("http://localhost:3001/news");
  return res.json();
};
