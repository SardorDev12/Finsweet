import "../styles/aboutUs.scss";
import AboutUsInfo from "../Components/AboutUsInfo";
import img1 from "../assets/images/Know more Image 1 (1).png";
import img2 from "../assets/images/Know more Image 2 (1).png";
import wallpaper from "../assets/images/BG.jpg";
import overlay from "../assets/images/BG Overlay.png";

function AboutUs() {
  return (
    <div className="about page">
      <AboutUsInfo img1={img1} img2={img2} />
      <div className="about-ad">
        <div className="about-wallpaper">
          <img src={wallpaper} alt="bg image" />
        </div>
        <div className="overlay">
          <img src={overlay} alt="overlay" />
        </div>

        <div className="section-text">
          <h2 className="section-title">One of the best Cafes in New York</h2>
          <p>
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.. Through True Rich Attended does no end it his mother
          </p>
        </div>
      </div>
      <div className="stats">
        <h2 className="section-title">Our History</h2>
        <div className="stats-container">
          <div className="stat">
            <h2 className="year">1998</h2>
            <h3 className="stat-title">Milestone One</h3>
            <p className="stat-text">
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </div>
          <div className="stat">
            <h2 className="year">1998</h2>
            <h3 className="stat-title">Milestone One</h3>
            <p className="stat-text">
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </div>
          <div className="stat">
            <h2 className="year">1998</h2>
            <h3 className="stat-title">Milestone One</h3>
            <p className="stat-text">
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </div>
          <div className="stat">
            <h2 className="year">1998</h2>
            <h3 className="stat-title">Milestone One</h3>
            <p className="stat-text">
              Through True Rich Attended does no end it his mother since
              favourable.
            </p>
          </div>
        </div>
      </div>
      <div className="about-info">
        <h1>Things our company stands for</h1>
        <div className="about-info__text">
          <h3>
            Edit this text to make it your own. To edit, simply click directly
          </h3>
          <p>
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, Designing voice and tone for
            error messages.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
