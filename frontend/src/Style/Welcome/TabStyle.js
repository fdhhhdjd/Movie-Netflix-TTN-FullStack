import { createGlobalStyle } from "styled-components";
export const TabStyle = createGlobalStyle`
  p {
    margin: 0.5rem 0;
  }

  img {
    width: 100%;
  }

  .btn {
    display: inline-block;
    background: #e50914;
    color: #fff;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    border-radius: 2px;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .btn-lg {
    font-size: 1rem;
    padding: 0.8rem 1.3rem;
    text-transform: uppercase;
  }

  .tabs {
    background: #141414;
    padding-top: 1rem;
    border-bottom: 3px solid #3d3d3d;
    border-right: none;
  }

  .tabs .tab__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .tabs p {
    font-size: 1.2rem;
    padding-top: 0.5rem;
    color: #fff;
  }

  .tabs .tab__container > div {
    padding: 1.5rem 0;
    color: gray;
  }

  .tabs .tab__container > div:hover {
    color: #fff;
    cursor: pointer;
  }

  .tab-border {
    border-bottom: #e50914 4px solid;
  }

  /* Tab Content */
  .tab-content {
    padding: 3rem 0;
    background: #000;
    color: #fff;
  }

  /* Hide initial content */
  #tab-1-content,
  #tab-2-content,
  #tab-3-content {
    display: none;
    opacity: 0;
  }

  .show {
    display: block !important;
    opacity: 1 !important;
    transition: all 1000 ease-in;
  }

  #tab-1-content .tab-1-content-inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  #tab-2-content .tab-2-content-top {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  #tab-2-content .tab-2-content-bottom {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
  }

  .table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
    border-spacing: 0;
  }

  .table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }

  .table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  .table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }

  .table tbody tr td:first-child {
    text-align: left;
  }

  .table tbody tr:nth-child(odd) {
    background: #222;
  }

  .tab__container {
    max-width: 70%;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
  }

  /* Text Style */

  .text-lg {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .text-md {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  .text-center {
    text-align: center;
  }

  .text-dark {
    color: #999;
  }

  @media (max-width: 960px) {
    .hide-sm {
      display: none;
    }

    .text-lg {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    .text-md {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 700px) {
    #tab-1-content .tab-1-content-inner {
      grid-template-columns: 1fr;
      text-align: center;
    }

    #tab-2-content .tab-2-content-top {
      display: block;
      text-align: center;
    }

    #tab-2-content .tab-2-content-bottom {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      text-align: center;
    }
  }
`;
