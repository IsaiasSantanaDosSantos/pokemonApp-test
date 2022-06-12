import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 93px;
  width: 100%;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);

  .headerConteudo {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .headerLogo {
    width: 30%;
    justify-items: center;
  }
  .headerMenu {
    width: 40%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    margin: 0;
    margin-top: 19px;
    margin-right: 96px;
}

.headerItens {
  list-style: none;
}

.headerItens a {
  text-decoration: none;
  font-style: normal;
  font-size: 25px;
  line-height: 34px;
  color: #000000;
}

.headerItens a:active,
.headerItens a:hover {
  padding-bottom: 7px;
  border-bottom: 3px solid #212121;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 34px;
  color: #212121;
}
  }
`;
