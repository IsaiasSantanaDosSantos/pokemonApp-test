import styled from "styled-components";

export const PokemonsContainer = styled.div`
  margin-top: 73px;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 3px;
    color: #171414;
  }

  .pokemonsSearchIcon {
    position: relative;
    width: 95%;
    margin: auto;
  }

  .pokemonsSearch {
    width: 100%;
    height: 53px;
    display: flex;
    margin: auto;
    margin-top: 33px;
    background: #ffffff;
    border: 1px solid #f1f1f1;
    border-right: none;
    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.1);
    border-radius: 40px 40px 40px 40px;
    padding: 16px 0px 15px 31px;
    margin-right: 0px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: rgba(33, 33, 33, 0.8);
  }

  .pokemonsIcon {
    position: absolute;
    width: 25.01px;
    height: 25px;
    top: 16px;
    right: 50px;
  }

  .pokemonsIcon:hover {
    cursor: pointer;
  }
  .pokemonsIcon img:active {
    width: 105%;
    height: 105%;
    margin-top: -3px;
  }

  input {
    margin-bottom: 8px;
  }
  .pokemonsAllpokemonsBox {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    margin-top: 45px;
    margin-bottom: 49px;
  }

  .pokemonsBtn {
    padding-bottom: 67px;
    width: 90%;
    display: flex;
    margin: auto;
  }
  .pokemonsBtn button {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    align-items: center;
    text-align: center;
    background: #48d0b0;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    width: 281px;
    height: 55px;
    border: none;
    margin: auto;
    cursor: pointer;
  }
  .pokemonsBtn button:active {
    border: 1px solid #48d0b0;
    color: #48d0b0;
    background: #ffffff;
    transition: 1s;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
      line-height: 37px;
      text-align: center;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 23px;
      line-height: 29px;
    }
    .pokemonsGroupSelect {
      position: relative;
      width: 100%;
      margin-top: 36px;
      justify-content: center;
    }
    .pokemonsSelectTipo,
    .pokemonsSelectAtaque,
    .pokemonsSelectDefesa {
      width: 100px;
    }
    .pokemonsCheckboxTipo {
      width: 100px;
      height: 144px;
      padding: 15px;
    }
  }
`;
