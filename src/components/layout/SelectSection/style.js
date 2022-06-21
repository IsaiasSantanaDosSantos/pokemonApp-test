import styled from "styled-components";

export const SelectSectionContainer = styled.div`

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



`;
