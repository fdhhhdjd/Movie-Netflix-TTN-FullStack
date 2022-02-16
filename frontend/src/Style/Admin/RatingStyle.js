import { createGlobalStyle } from "styled-components";

export const RatingStyle = createGlobalStyle`
.productList{
    flex: 4;
}

.productListItem{
    display: flex;
    align-items: center;
}

.productListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

.productListEdit{
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
}

.productListDelete{
    color: red;
    cursor: pointer;
}
.userAddButton {
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;
