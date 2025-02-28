import "/src/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <h4>Om Oss</h4>
        <p>
          Välkommen till Mangosteen, där mode handlar om mer än bara kläder –
          det är en attityd, en livsstil och ett statement. Vi skapar
          kollektioner för dem som vågar sticka ut, för dem som ser mode som ett
          konstverk och en förlängning av sin personlighet.
          <strong>Våga vara annorlunda. Våga vara Mangosteen.</strong>
        </p>
      </div>

      <div className="contact">
        <h4>Kontakt</h4>
        <ul className="contact-links">
          <li>
            <a href="mailto:info@mangosteen.com">info@mangosteen.com</a>
          </li>
          <li>
            <a href="">070-000 11 11</a>
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
