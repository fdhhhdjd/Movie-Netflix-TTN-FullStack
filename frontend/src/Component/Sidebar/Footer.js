// import React, { useState, useRef } from "react";
// import { FooterStyle } from "../../Style/StyleHome/FooterStyle";
// import { DataInfo, DataContent } from "../../imports/import";
// import { logo } from "../../imports/image";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [member, setMember] = useState("");

//   const emailRef = useRef();
//   const passwordRef = useRef();

//   const handleStart = () => {
//     setEmail(emailRef.current.value);
//   };
//   const handleFinish = () => {
//     setPassword(passwordRef.current.value);
//   };
//   return (
//     <>
//       <FooterStyle />
//       <div className="register">
//         <div className="top">
//           <div className="wrapper">
//             <img className="logo" src={logo} alt="" />
//             <button className="loginButton">Sign In</button>
//           </div>
//         </div>
//         <div className="container">
//           <h1>Unlimited movies, TV shows, and more.</h1>
//           <h2>Watch anywhere. Cancel anytime.</h2>
//           <p>
//             Ready to watch? Enter your email to create or restart your
//             membership.
//           </p>
//           {!email ? (
//             <div className="input">
//               <input type="email" placeholder="email address" ref={emailRef} />
//               <button className="registerButton" onClick={handleStart}>
//                 Get Started
//               </button>
//             </div>
//           ) : (
//             <form className="input">
//               <input type="password" placeholder="password" ref={passwordRef} />
//               <button className="registerButton" onClick={handleFinish}>
//                 Start
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

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
