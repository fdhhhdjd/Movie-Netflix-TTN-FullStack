import { createGlobalStyle } from "styled-components";

export const FeedbackStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.bubble {
    position: fixed;
    background-color: transparent;
    bottom: 20px;
    left: 0;
    visibility: visible;
    height: 110px;
    width: 110px;
    z-index: 200000!important;
}

.bubble.fb {
    bottom: 100px;
    left: 0;
}

.bubble .bubble-item .bubble-circle {
    display: block;
    background-color: transparent;
    border-radius: 100%;
    height: 90px;
    left: 12px;
    opacity: .5;
    position: absolute;
    top: 12px;
    width: 90px;
}

.bubble .bubble-item .bubble-img-circle-phone {
    display: block;
    border: 2px solid transparent;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAB/ElEQVR42uya7W3CMBCG31QM4A1aNggTlG6QbpBMkHYC1AloJ4BOABuEDcgGtBOETnD9c1ERCH/lwxeaV8oPFGP86Hy+DxMREW5Bd7gRjSDSNGn4/RiAOvm8C0ZCRD5PSkQVXSr1nK/xE3mcWimA1ZV3JYBZCIO4giQANoYxMwYS6+xKY4lT5dJPreWZY+uspqSCKPYN27GJVBDXheVSQe494ksiEWTuMXcu1dld9SARxDX1OAJ4lgjy4zDnFsC076A4adEiRwAZg4hOUSpNoCsBPDGM+HqkNGynYBCuILuWj+dgWysGsNe8nwL4GsrW0m2fxZBq9rW0rNcX5MOQ9eZD8JFahcG5g/iKT671alGAYQggpYWvpEPYWrU/HDTOfeRIX0q2SL3QN4tGhZJukVobQyXYWw7WtLDKDIuM+ZSzscyCE9PCy5IttCvnZNaeiGLNHKuz8ZVh/MXTVu/1xQKmIqLEAuJ0fNo3iG5B51oSkeKnsBi/4bG9gYB/lCytU5G9DryFW+3Gm+JLwU7ehbJrwTjq4DJU8bHcVbEV9dXXqqP6uqO5e2/QZRYJpqu2IUAA4B3tXvx8hgKp05QZW6dJqrLTNkB6vrRURLRwPHqtYgkC3cLWQAcDQGGKH13FER/NATzi786+BPDNjm1dMkfjn2pGkBHkf4D8DgBJDuDHx9BN+gAAAABJRU5ErkJggg==) center center/70% auto no-repeat #e50914;
    border-radius: 100%;
    height: 30px;
    left: 43px;
    opacity: .7;
    position: absolute;
    top: 43px;
    transform-origin: 50% 50% 0;
    transition: all .2s ease-in-out 0s;
    width: 30px;
}

.bubble .bubble-item .bubble-img-circle-fb {
    display: block;
    border: 2px solid transparent;
    background: url(https://i.rada.vn/data/image/2020/08/21/Facebook-2020-200.png) center center/70% auto no-repeat #1877f2;
    border-radius: 100%;
    height: 30px;
    left: 43px;
    opacity: .7;
    position: absolute;
    top: 43px;
    transform-origin: 50% 50% 0;
    transition: all .2s ease-in-out 0s;
    width: 30px;
}

.bubble .bubble-item .bubble-circle-fill {
    display: block;
    border: 2px solid transparent;
    border-radius: 100%;
    height: 60px;
    left: 28px;
    opacity: .75!important;
    position: absolute;
    top: 28px;
    transition: all .5s ease 0s;
    width: 60px;
}

.bubble-item .phone {
    background-color: #e50914;
    border: 2px solid #e50914;
}

.bubble-item .fb {
    background-color: #1877f2;
    border: 2px solid #1877f2;
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}

.animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}

.zoomIn {
    animation-name: zoomIn;
}

.pulse {
    animation-name: pulse;
    animation-timing-function: ease-in-out;
}

.tada {
    animation-name: tada;
}

@keyframes zoomIn {
    0% {opacity: 0;
    transform: scale3d(.3, .3, .3);}
    50% {opacity: 1;}
}

@keyframes pulse {
    0%, 100% {
        transform: scale3d(1, 1, 1);
    }
    50% {
        transform: scale3d(1.05, 1.05, 1.05)
    }
}

@keyframes tada {
    0%, 100% {
        transform: scale3d(1,1,1);
    }
    10%, 20% {
        transform: scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);
    }
    30%, 50%, 70%, 90% {
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);
    }
    40%, 60%, 80% {
        transform: scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);
    }
}

.contact{
    position: relative;
    min-height: 100vh;
    padding: 50px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image:url(https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80);
    background-color: #333;


}

.contact .content{
    max-width: 800px;
    text-align: center;

}

.containers{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:30px;
    @media only screen and (max-width: 390px) {
        margin-top:50px;
    }

}
.containers .contactInfo{
    width: 50%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 390px) {
        padding:0;
        margin:0;
        width:100%;
    }

}
.contact .contactInfo .box{
    position: relative;
    padding: 20px 0;display: flex;
    @media only screen and (max-width: 390px) {

        width:100%;
    }

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
    @media only screen and (max-width: 390px) {

        word-wrap:break-word;
    }
}
.contact .contactInfo .box .text:hover{
    color: rgba(255, 255, 255, 0.5)
}.contact .contactInfo .box .text #feedback:hover{
    color: rgba(255, 255, 255, 0.5)
}
#feedback{
    text-decoration: none;
    color: #fff;
    @media only screen and (max-width: 390px) {

        word-wrap:break-word;
    }

}
.contact .contactInfo .box .text h3{
    font-weight: 500;
    color: white;

}
.contact .contactInfo .box .text p{
    word-wrap:break-word;

}
.contactForm{
    position:relative;
    width: 40%;
    padding:40px;
    background: #fff;
    border-radius: 4px;
    @media only screen and (max-width: 390px) {
        padding:20px;
        width:100%;
        margin-left:100px;

    }
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
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666

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
top:10px;
right:20px;
height:100px;
width:100px;




@media only screen and (max-width: 390px) {
    padding:0;
    margin:0;

}
}
@media only screen and (max-width: 992px) {
    .contact{
        padding-top:120px;
        padding-bottom:88px;
    }
    .containers{
        width:100%;
        flex-direction: column;
    }
    .containers .contactInfo{
        margin-bottom:40px;
        width:100%;
    }
    .containers .contactInfo{
        width:100%;
    }
    .logo-feedback{
    //    display:none;
        bottom:0;
        right:0;
    }
    .contactInfo{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .box{
            min-width:380px;
        }
    }
    .contactForm{
        min-width:500px;

    }
    .contactInfo{
        padding:10px 10px;
    }
}

@media only screen and (max-width: 576px) {
    .contactForm{
        min-width:380px;
        height:100%;
        margin:0;
        padding:10px;
        margin-bottom: 37px;
    }

}
@media only screen and (max-width: 390px) {
    .contactForm{
        min-width:300px;
        height:100%;
        margin:0;
        padding:10px;
        margin-bottom: 37px;
    }

}

`;
