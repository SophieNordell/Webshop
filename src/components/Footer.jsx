import "/src/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <h4>Om Oss</h4>
        <p>hejhej</p>
      </div>

      <div className="contact">
        <h4>Kontakt</h4>
        <ul className="contact-links">
          <li>
            <a href="">Mail</a>
          </li>
          <li>
            <a href="">Tele</a>
          </li>
          <li>
            <a href="">Fax</a>
          </li>
        </ul>
      </div>

      <div className="social">
        <h4>Sociala Medier</h4>
        <ul className="social-links">
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
