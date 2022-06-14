import styled from "styled-components";

export const PokemonsContainer = styled.div`
  margin-top: 73px;
  border: 1px solid black;

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

  .pokemonsSearch {
    width: 95%;
    height: 53px;
    display: flex;
    margin: auto;
    margin-top: 33px;
    background: #ffffff;
    border: 1px solid #f1f1f1;
    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.1);
    border-radius: 40px;
    padding: 16px 31px 15px 31px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: rgba(33, 33, 33, 0.8);
  }

  .pokemonsGroupSelect {
    margin-top: 36px;
    padding: 0px 60px;
  }
  .pokemonsSelectTipo {
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
  }

  .pokemonsCheckboxTipo {
    display: block;
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
`;
