import { createGlobalStyle } from "styled-components";

export const HomeStyle = createGlobalStyle`

.home{
    background-color: #141414;
    overflow: hidden;
}

.home__content {
    position: fixed !important;
    background-color: #000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
`;
