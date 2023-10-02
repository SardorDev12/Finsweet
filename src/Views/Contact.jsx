import "../styles/contact.scss";
import img1 from "../assets/images/Blog Image.png";
import img2 from "../assets/images/Blog Image.png";

function Contact() {
  return (
    <div className="contact page">
      <div className="contact-form">
        <h1 className="contact-form__title">
          Have a Question ? Get in Touch with us 👋
        </h1>
        <p>Fill up the Form and ou team will get back to within 24 hrs</p>
        <form action="#" className="form">
          <div className="name-email">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                id="name"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="email"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
              />
            </div>
          </div>
          <textarea name="message" id="message"></textarea>

          <button type="submit" className="submit-btn btn">
            Send message
          </button>
        </form>
      </div>
      <div className="contact-images">
        <div className="image">
          <img src={img1} alt="image" />
        </div>
        <div className="image">
          <img src={img2} alt="image" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
