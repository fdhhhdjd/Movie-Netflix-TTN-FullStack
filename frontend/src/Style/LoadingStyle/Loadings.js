import styled from "styled-components";
export const Loadings = styled.div`
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    background: #0e0e0e;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .fade-out {
    top: -120%;
  }
`;
