import { Fragment } from "react";
import { FooterStyle } from "../../Style/StyleHome/FooterStyle";
import { DataInfo, DataContent } from "../../imports/import";
const Footer = () => {
  return (
    <>
      <FooterStyle />
      <div className="footer-container">
        <div className="icons">
          {DataInfo.map((item) => {
            return (
              <Fragment key={item.id}>
                <a href={item.address} target={item.target}>
                  <i className={item.icon}></i>
                </a>
              </Fragment>
            );
          })}
        </div>
        <div className="content">
          {DataContent.map((item) => {
            return (
              <Fragment key={item.id}>
                <a href={item.target} key={item}>
                  {item.content}
                </a>
              </Fragment>
            );
          })}
        </div>
        <span className="service-code">
          <a>Service Code</a>
        </span>
        <span className="copyright">
          &copy; 2021-2022 Netflix, Inc. &#123; Web Site Movie Team Dev &#125;
        </span>
      </div>
    </>
  );
};

export default Footer;
