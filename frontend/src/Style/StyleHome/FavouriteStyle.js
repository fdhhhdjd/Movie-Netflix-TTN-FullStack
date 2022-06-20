import { createGlobalStyle } from "styled-components";

export const FavouriteStyle = createGlobalStyle`
.favourite{
    background-color: #141414;
    overflow: hidden;
    min-height: 100vh;
}

.fav-list {
    margin-top: 180px;
    position: fixed !important;
    background-color: #141414;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
`