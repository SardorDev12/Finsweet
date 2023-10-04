import "../styles/ourStory.scss";
import img1 from "../assets/images/Blog Image.png";
import img2 from "../assets/images/Blog Image.png";
import { useEffect } from "react";

function OurStory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ourstory page">
      <div className="story-image">
        <h1 className="section-title">Our Story</h1>
        <p className="story-parag">
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic.
        </p>
        <div className="images">
          <div className="image">
            <img src={img1} alt="image" />
          </div>
          <div className="image">
            <img src={img2} alt="image" />
          </div>
        </div>
      </div>
      <div className="story-text">
        <h1 className="story-text__title">
          One of the best cafes in <span>New York.</span>
        </h1>
        <p>
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, Designing voice and tone for error messages.
        </p>
        <br />
        <p>
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, Designing voice.
        </p>
      </div>
    </div>
  );
}
export default OurStory;
