import "../styles/home.scss";
import Button from "../Components/Button";
import HeaderImage from "../assets/images/Header Image.png";
import AboutUsInfo from "../Components/AboutUsInfo";
import Testimonials from "../Components/Testimonials";
import img1 from "../assets/images/Know more Image 1.png";
import img2 from "../assets/images/Know more Image 2.png";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { useDataContext } from "../Layouts/GlobalContext";

function Home() {
  const { products, news } = useDataContext();
  return (
    <>
      <section className="home page">
        <div className="container">
          <section className="hero">
            <div className="hero-info">
              <h2 className="section-title">
                We serve high quality foods of all kinds.
              </h2>
              <p>
                Edit this text to make it your own. To edit, simply click
                directly on the text to start adding your own words. You can
                move the text.
              </p>
              <Button
                title={"View Menu"}
                clas={"contact-btn view-menu"}
                where={"menu"}
              />
              <div>
                <h4>Opening Times</h4>
                <p>Sunday to Saturday | 09:00 AM to 11:00 PM</p>
              </div>
              <div>
                <h4>Location</h4>
                <p>Master canteen, BBSR , Odisha 752054</p>
              </div>
              <div>
                <h4>Call us</h4>
                <a href="tel:+9776462441">+9776462441</a>
              </div>
            </div>
            <div className="hero-image">
              <img src={HeaderImage} alt="hero-image" />
            </div>
          </section>
          <section className="about">
            <AboutUsInfo img1={img1} img2={img2} />
          </section>
          <section className="services">
            <Link className="section-subtitle" to="menu">
              WHAT WE ARE SERVING
              <FaArrowRight className="section-subtitle__icon" />
            </Link>
            <div className="section-title">
              <h2>We all have to eat, so why not do it beautifully?</h2>
              <p>
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic.. Through True Rich Attended does no end it his
                mother
              </p>
            </div>
            <div className="services-container">
              <div className="service">
                <div className="service-icon">
                  <FaBirthdayCake />
                </div>
                <h3>Quafe Cake</h3>
                <p>
                  Through True Rich Attended no end it his mother since
                  favourable real had half every him.
                </p>
              </div>
              <div className="service">
                <div className="service-icon">
                  <FaCoffee />
                </div>
                <h3>Cofee</h3>
                <p>
                  Through True Rich Attended no end it his mother since
                  favourable real had half every him.
                </p>
              </div>
              <div className="service">
                <div className="service-icon">
                  <FaHamburger />
                </div>
                <h3>Fast Food</h3>
                <p>
                  Through True Rich Attended no end it his mother since
                  favourable real had half every him.
                </p>
              </div>
              <div className="service">
                <div className="service-icon">
                  <FaCocktail />
                </div>
                <h3>Cocktails</h3>
                <p>
                  Through True Rich Attended no end it his mother since
                  favourable real had half every him.
                </p>
              </div>
              <div className="service">
                <div className="service-icon">
                  <FaFire />
                </div>
                <h3>Grill</h3>
                <p>
                  Through True Rich Attended no end it his mother since
                  favourable real had half every him.
                </p>
              </div>
              <div className="service">
                <div className="service-icon">
                  <FaUtensils />
                </div>
                <h3>Snacks</h3>
                <p>
                  Through True Rich Attended no end it his mother since
                  favourable real had half every him.
                </p>
              </div>
            </div>
          </section>
          <section className="menu">
            <Link className="section-subtitle" to="menu">
              OUR MENU
              <FaArrowRight className="section-subtitle__icon" />
            </Link>
            <div className="section-title">
              <h2>Discover our menu chart</h2>
              <p>
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic.. Through True Rich Attended does no end it his
                mother
              </p>
            </div>
            <div className="section-subtitle-2">Most Popular Picks</div>
            <div className="menu-container">
              {products?.slice(0, 6).map((item, index) => {
                return (
                  <div className="menu-item" key={index}>
                    <img src={item.img} alt="menu item" />
                    <div className="item-info">
                      <p>{item.title}</p>
                      <p>{item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              title={"View Menu"}
              where={"menu"}
              clas={"view-menu-btn contact-btn"}
            />
          </section>
        </div>
      </section>
      <Testimonials />
      <section className="home page">
        <div className="container">
          <section className="blog-section">
            <h1 className="section-title">Read Our Lastest Blog</h1>
            <div className="blogs">
              {news?.slice(0, 3).map((blog, index) => {
                return (
                  <div className="blog" key={index}>
                    <div className="blog-info">
                      <p className="blog-date">{blog.date}</p>
                      <h4>{blog.title}</h4>
                      <p className="blog-text">
                        {blog.text.substring(0, 100)}
                        <Link to={"blog"} className="readmore">
                          Read More
                        </Link>
                      </p>
                    </div>
                    <div className="blog-image">
                      <img src={blog.img} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
export default Home;
