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

  .pokemonsGroupSelect {
    display: flex;
    position: relative;
    width: 89%;
    margin: auto;
    margin-top: 36px;
    justify-content: start;
  }
  .pokemonsSelectTipo,
  .pokemonsSelectAtaque,
  .pokemonsSelectDefesa {
    margin-right: 15px;
    width: 135px;
    height: 21px;
    text-align: center;
    background: #f2f2f2;
    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 4px;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #171414;
    display: flex;
    justify-content: right;
  }
  .pokemonsIcons {
    cursor: pointer;
  }

  .pokemonsSelectAtaque p,
  .pokemonsSelectTipo p,
  .pokemonsSelectDefesa p {
    margin: auto;
  }

  .pokemonsCheckboxTipo {
    display: block;
    position: absolute;
    width: 135px;
    height: 162px;
    padding: 18px 32px;
    background: #f2f2f2;
    box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
    border-radius: 8px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    flex: none;
    order: 1;
    z-index: 1000;
    flex-grow: 0;
  }

  input {
    margin-bottom: 8px;
  }
  .pkemonsAllpokemonsBox {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    margin-top: 45px;
    margin-bottom: 49px;
  }

  .pkemonsBtn {
    padding-bottom: 67px;
    width: 90%;
    display: flex;
    margin: auto;
  }
  .pkemonsBtn button {
    margin: auto;
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
