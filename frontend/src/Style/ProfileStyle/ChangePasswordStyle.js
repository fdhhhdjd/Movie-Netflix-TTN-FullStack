import { createGlobalStyle } from "styled-components";

export const ChangePasswordStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.contact{
    position: relative;
    min-height: 100vh;
    padding: 100px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image:url(https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80);
    background-color: #333;

    
}
.inputBox{
    display: flex;
    justify-content:space-between;
}
.contact .content{
    max-width: 800px;
    text-align: center;
    
}
.contact .content h2{
    font-size:36px;
    font-weight:500;
    color: red;
}
.contact .content p{
    font-size:20px;
    font-weight:500;
    color: #fff;
    margin-top: 15px;
    font-weight: bold;
    
}
.containers{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:30px;
    
}
.containers .contactInfo{
    width: 50%;
    display: flex;
    flex-direction: column;

}
.contact .contactInfo .box{
    position: relative;
    padding: 20px 0;display: flex;
    
}
.contact .contactInfo .box .icon{
    min-width: 60px;
    height:60px;
    background:black;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size:22px;
}
.fa-envelope-o{
    color:orangered;
}

.fa-map-marker{
    color:yellow;
}
.fa-phone {
    color: green;
}
.fa-globe{
    color: rgb(46, 46, 192);
}
.contact .contactInfo .box .text{
    display: flex;
    margin-left: 20px;font-size:16px;
    color: #fff;
    flex-direction: column;
    font-weight:300;
}
.contact .contactInfo .box .text:hover{
    color: rgba(255, 255, 255, 0.5)
}.contact .contactInfo .box .text #feedback:hover{
    color: rgba(255, 255, 255, 0.5)
}
#feedback{
    text-decoration: none;
    color: #fff;
}
.contact .contactInfo .box .text h3{
    font-weight: 500;
    color: white;
 
}
.contactForm{
    width: 40%;
    padding:40px;
    background: #fff;
    border-radius: 4px;
}
.contactForm h2{
    font-size:30px;
    color: red;
    font-weight:500;
}
.contactForm .inputBox{
    position: relative;
    width:100%;
    margin-top:10px
}
.contactForm .inputBox input,
.contactForm .inputBox textarea{
width: 100%;
padding:5px 0;
font-size:16px;
margin: 10px 0;border: none;
border-bottom: 2px solid #333;outline:none;
resize: none;
}
.contactForm .inputBox span{
    position: absolute;
    left: 0;
    padding:5px 0;font-size:16px;
    margin: 5px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
}
.contactForm .inputBox input:focus~span,
.contactForm .inputBox input:valid ~span,
.contactForm .inputBox textarea:focus~span,
.contactForm .inputBox textarea:valid~span {
    color: #e91e63;
    font-size: 12px;
    transform: translateY(-20px);
}
.contactForm .inputBox input[type="submit"] {
width: 100px;
background-color: red;
color: #fff;
border: none;
cursor: pointer;
padding:10px;
font-size: 18px;
border-radius: 5px;
font-size: 14px;
font-weight: 400;
-webkit-box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
}
.logo-feedback{
position:absolute;
margin-left:20rem;
margin-bottom:10rem;
height:100px;
width:100px;
}
@media(max-width:991px){
    .contact{
        padding: 50px;
    }
    .containers{
        flex-direction: column;
    }
    .containers .contactInfo{
        margin-bottom:40px;
    }
    .containers .contactInfo{
        width:100%;
    }
}
`;
