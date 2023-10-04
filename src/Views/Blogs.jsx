import { Link, useLoaderData } from "react-router-dom";
import "../styles/blogLayout.scss";
import { useEffect } from "react";

function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { news } = useLoaderData();
  const trendingArticle = news[0];
  return (
    <div className="blog page">
      <div className="featured-articles">
        <h1>Featured Aticles</h1>
        <div className="featured-articles__container">
          <div className="trending-article">
            <div className="trending-article__img">
              <img src={trendingArticle.img} alt="trending article image" />
              <div className="overlay"></div>
            </div>
            <div className="article-info">
              <h3 className="trending-badge">trending</h3>
              <div className="article-details">
                <h3 className="trending-title">{trendingArticle.title}</h3>
                <div className="author-readmore">
                  <div className="article-author">
                    <h3 className="author-name">{trendingArticle.author}</h3>
                    <p className="article-date">{trendingArticle.date}</p>
                  </div>

                  <Link to={trendingArticle.id.toString()}>Read More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="other-articles">
            {news?.slice(1, 3).map((item) => {
              return (
                <div className="blog" key={item.id}>
                  <div className="blog-img">
                    <img src={item.img} alt="blog img" />
                  </div>
                  <div className="blog-info">
                    <h2 className="blog-title">{item.title}</h2>
                    <p className="blog-text">
                      {item.text.substring(0, 50)}
                      <Link className="readmore" to={item.id.toString()}>
                        {" "}
                        Read More
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="all-articles">
        <h1>All Articles</h1>
        <div className="articles-container">
          {news?.map((article) => {
            return (
              <div className="article" key={article.id}>
                <div className="article-img">
                  <img src={article.img} alt="article img" />
                </div>
                <div className="article-info">
                  <div className="article-author">
                    <p className="author-name">{trendingArticle.author}</p>
                    <p className="article-date">{trendingArticle.date}</p>
                  </div>
                  <div className="article-title">{article.title}</div>
                  <Link to={article.id.toString()}>Read More</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Blogs;
export const loadBlogData = async () => {
  const res = await fetch("https://sardordev12.github.io/feenSweetAPI/db.json");
  if (!res.ok) {
    throw Error("Could not fetch data!");
  }
  return res.json();
};
