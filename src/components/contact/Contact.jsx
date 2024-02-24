/* eslint-disable react/prop-types */
import './contact.css';

const socialsmedia = [
  { title: 'Whatsapp', image: 'icons/whatsapp.png' },
  { title: 'Instagram', image: 'icons/instagram.png' },
  { title: 'LinkedIn', image: 'icons/linkedin.png' },
  { title: 'GitHub', image: 'icons/github.png' },
];

const Contact = ({ contactRef }) => {
  return (
    <div className="contact" ref={contactRef}>
      <h3>Do you want to contact me?</h3>
      <div className="contact-container">
        <div className="contact-form">
          <span>Send me a message</span>
          <form>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <input type="number" placeholder="Your Whatsapp number" />
            <textarea placeholder="Your message"></textarea>
          </form>
          <button>
            Send message
            <div className="button-line"></div>
          </button>
        </div>
        <div className="contact-socialmedia">
          <span>Follow me and contact me on my social networks</span>
          <div className="socialsmedia">
            {socialsmedia.map((item, i) => (
              <img key={i} alt={item.title} src={item.image} />
            ))}
          </div>
          <p className="contact-email">matiassimonluduena@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
