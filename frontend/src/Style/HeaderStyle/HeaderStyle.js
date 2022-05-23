import { createGlobalStyle } from "styled-components";

export const HeaderStyle = createGlobalStyle`

.container{
  max-width: 1800px;
  padding: 0 !important;
}



  .header-section {
    z-index: 10000 !important;
    background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%) !important;
    transition: all 0.4s ease-in-out !important;

    &.scrolled {
        background: rgb(20,20,20) !important;
    }

    img{
    max-width:70px;
    max-height:70px;
  }
  .navbar{
    max-height: 70px !important;

    .navbar-brand img {
      width: 70px;
    }

    .nav-link {
      font-size: 14px !important;
      color: #fff !important;
    }
  }
  h3{
    color:#fff;
  }
  .right{
    color:#fff;
    img{
      max-width:35px;
      max-height:35px;

        border-radius: 5px;

        -o-object-fit: cover;
           object-fit: cover;
        cursor: pointer;
    }
    .span{
      color:#fff;
    }
    .icon{
        cursor: pointer;
        font-size: 22px;
    }
    .profile{
      i{
          cursor: pointer;
          transition: .3s ease-in-out;
      }
      .options{
          background-color: #0b0b0b;
          border-radius: 5px;
          transition: .4s ease-in-out;
          &::hover{
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
                  -ms-flex-direction: column;
                      flex-direction: column;
              position: fixed;
          }
      }
      span{
        cursor:pointer;
        color: #fff;
        background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 50%);
        &::hover{

        }
      }


    }
    .profile:hover i {
        transform: rotate(180deg);
      }
  }
  .exit{
    padding: 8px 30px;
    font-size: 1vw;
    border-radius: 3px;
    outline: none;
    border: none;
    font-weight: 600;
    color: #fff;
    background: #e50914;
    cursor: pointer;
        &:hover {
            opacity: 0.85;
          }
  }
}
`;
