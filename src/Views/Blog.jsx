import { useLoaderData, useParams } from "react-router-dom";

function Blog() {
  //   const { id } = useParams();
  const singleBlog = useLoaderData();
  return (
    <div className="single-article">
      <div className="author">
        <p className="author-name">{singleBlog.author}</p>
        <p className="pub-date">{singleBlog.date}</p>
      </div>
      <h1 className="blog-title">{singleBlog.title}</h1>
      <div className="blog-img">
        <img src={singleBlog.img} alt="blog-img" />
      </div>
      <p className="blog-text">{singleBlog.text}</p>
    </div>
  );
}
export default Blog;

export const loadSingleBlog = async ({ params }) => {
  const { id } = params;

  const res = await fetch("https://sardordev12.github.io/feenSweetAPI/db.json");
  if (!res.ok) {
    throw Error("Could not fetch data!");
  }

  const { news } = await res.json();
  return news.find((item) => item.id == id);
};
