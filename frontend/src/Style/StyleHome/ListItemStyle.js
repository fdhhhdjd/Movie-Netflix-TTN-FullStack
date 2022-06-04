import { createGlobalStyle } from "styled-components";

export const ListItemStyle = createGlobalStyle`
.listItem {
  width: 225px;
  height: 120px;
  background: #0b0b0b;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  transition: .4s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    width: 100%;
    height: 180px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    width: auto;
    height: auto;
    position: absolute;
    top: -150px;
    -webkit-box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.14);
    box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.14);
    img {
      height: 140px;
    }
  }

  .item-info {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding: 0 10px;

    .icons {
      margin: 8px 0px;
      display: flex;
      justify-content:space-between;

      &.play-btn {
        background: #fff;
        color: #000;
      }

      a svg {
        background: #fff;
        font-size: 30px;
        margin-bottom: 2px;
        border-radius: 50%;
      }

      & > span > * {
        margin-right: 10px;
        font-size: 35px;

        &:hover {
          opacity: 0.7;
        }
      }

      & > span > a {
        color: #000;
        margin-right: 10px;
        font-size: 35px !important;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    &-top {
      color: #808080;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 10px;
      span {
        margin-right: 10px;

        &.match {
          color: #46d369;
          font-size: 18px;
        }

        &:nth-child(2), &:nth-child(4) {
          padding: 1px 6px;
          border: 1px solid #808080;
        }
      }
    }
    .desc {
      font-size: 14px;
      margin-bottom: 8px;
    }
    .genre {
      color: #ccc;
      font-weight: 600;
      margin-bottom: 15px;
      display: flex;
     
    }
  }
}
  #myID{
    width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
}`;
