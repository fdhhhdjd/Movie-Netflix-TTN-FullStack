import styled from "styled-components";
export const SidebarAdmin = styled.div`
  .sidebar {
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
  }

  .sidebarWrapper {
    padding: 20px;
    color: #555;
  }

  .sidebarMenu {
    margin-bottom: 10px;
  }

  .sidebarTitle {
    font-size: 13px;
    color: rgb(187, 186, 186);
  }

  .sidebarList {
    list-style: none;
    padding: 5px;
  }

  .sidebarListItem {
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }

  .sidebarListItem.active,
  .sidebarListItem:hover {
    background-color: silver;
  }

  .sidebarIcon {
    margin-right: 5px;
    font-size: 20px !important;
  }
`;
