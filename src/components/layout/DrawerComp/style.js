import styled from "styled-components";

export const DrawerCompContainer = styled.div`
  .drawerCompNavbar {
    text-align: center;
  }

  ul {
    list-style: none;
  }

  li {
    padding-top: 2em;
  }

  li a {
    text-decoration: none;
    font-style: normal;
    font-size: 20px;
    line-height: 34px;
    color: #000000;
  }
  li a:active,
  li a:hover {
    border-bottom: 3px solid #212121;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #212121;
  }
  .drawerCompImg img {
    width: 150px;
    margin-top: 54px;
  }
`;
