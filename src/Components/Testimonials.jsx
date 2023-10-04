import img3 from "../assets/images/person.png";
import video from "../assets/videos/BOMBA_COFFEE_Promotional_Video____Epic_B_roll_sequence___All_Handheld.mp4";
import { FaQuoteLeft } from "react-icons/fa";
import { memo, useRef, useState } from "react";
import testimonials from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const toggleVideoPlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPaused) {
        video.play();
      } else {
        video.pause();
      }

      setIsPaused(!isPaused);
    }
  };
  return (
    <section className="testimonials">
      <div className="testimonials-slider">
        <div className="slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <FaQuoteLeft />
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="author">
                  <div className="testimonial-author">
                    <h4>{testimonial.author.name}</h4>
                    <p>{testimonial.author.address}</p>
                  </div>
                  <div className="author-img">
                    <img src={testimonial.author.picture} alt="author img" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="testimonial-video">
        <div className="video-container">
          <video muted autoPlay loop ref={videoRef} onClick={toggleVideoPlay}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonials);
