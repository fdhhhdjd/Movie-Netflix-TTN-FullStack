import { FooterStyle } from "../../Style/StyleHome/FooterStyle";

const Footer = () => {
  return (
    <>
      <FooterStyle />
      <div className="footer-container">
        <div className="icons">
          <a href="https://www.facebook.com/kocan.yeuai.5">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="content">
          <a href="#">Audio and Subtitles</a>
          <a href="#">Help Center</a>
          <a href="#">Media Center</a>
          <a href="#">Jobs</a>
          <a href="#">Privacy</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Audio Description</a>
          <a href="#">Gift Cards</a>
          <a href="#">Investor Relations</a>
          <a href="#">Terms of Use</a>
          <a href="#">Legal Notices</a>
          <a href="#">Corporate Information</a>
        </div>
        <span className="service-code">
          <a>Service Code</a>
        </span>
        <span className="copyright">
          &copy; 1997-2022 Netflix, Inc. &#123;
          4e90c45b-7fea-48c1-8c52-cf6770b88015 &#125;
        </span>
      </div>
    </>
  );
};

export default Footer;
