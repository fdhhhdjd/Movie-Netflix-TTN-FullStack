import { Label } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { DirectorsStyle } from "../../Style/Directors/DirectorsStyle";
import Header from "../Header/Header";
import {logoNetFlix} from '../../imports/image'
import Footer from "../Sidebar/Footer";
const Directors = () => {
    const { InfoDirector} = useSelector((state) => state.director)  
    console.log(InfoDirector,'info director')
  return (
    <>
      <Header />
      <DirectorsStyle />
      {/* <section className="directors">
        <div className="container">
          <div className="row">
              <div className=" col">
                    {InfoDirector?.map((item)=>{
                        return(
                            <img src={item.image.url} className="image-director"/>
                        )
                    })}
              </div>
          </div>
        </div>
      </section> */}
      <section className="directors">
      <div className="container">
        <div className="location" id="home">
          <h1 id="home">Popular on Netflix</h1>
          <div className="box">
          {
              InfoDirector.map((item)=>{
                  return(
                    <a href="" key={item._id}><img src={item.image.url} alt="" /></a>

                  )
              })
          }
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true" alt="" /></a>        
          </div>
        </div>
      </div>
      
      </section>
      <Footer />
    </>
  );
};

export default Directors;
