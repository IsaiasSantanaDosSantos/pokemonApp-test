import styled from "styled-components";

export const AllPokemonsContainer = styled.div`
  display: flex;
  width: 171.99px;
  height: 128px;
  margin: auto;
  padding-botttom: 125px;

  .allPokemonsBox {
    display: block;
    width: 162px;
    height: 109.01px;
    border-radius: 15px;
    margin-bottom: 49px;
    margin: 9px 5px;
    cursor: pointer;
  }

  .allPokemonsBox:active {
    .allPokemonsImg img {
      width: 80%;
      height: 80%;
    }
  }

  .allPokemonsNumber {
    float: right;
    margin-top: 9.91px;
    margin-right: 7.32px;
    width: 100%;
    height: 12.88px;
    align-items: center;
    text-align: right;
    color: #3e8570;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  .allPokemonsName {
    width: 100%;
    height: 12.88px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #645c5c;
    margin-left: 16.73px;
    margin-top: 0.99px;
  }

  .allPokemonsDiscritionImg {
    display: flex;
  }
  .llPokemonsDiscrition {
    display: block;
  }
  .allPokemonsDiscritionTipo,
  .allPokemonsDiscritionPoder {
    background: rgba(255, 255, 255, 0.4);
    background-blend-mode: soft-light;
    border-radius: 38px;
    margin-left: 16.72px;
    padding: 5px;
    text-align: center;
    height: 15.86px;
  }

  .allPokemonsDiscritionTipo {
    margin-top: 9.91px;
    margin-bottom: 5.95px;
  }

  .allPokemonsDiscritionTipo p,
  .allPokemonsDiscritionPoder p {
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 27px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: -11px;
  }

  .allPokemonsImg {
    width: 79.43px;
    height: 70.36px;
    margin-left: 7.32px;
    margin-right: 7.32px;
  }

  .allPokemonsImg img {
    width: 100%;
    height: 100%;
  }

  .rock {
    background-color: rgb(148, 81, 81);
  }
  .ghost {
    background-color: rgb(247, 247, 247);
  }
  .electric {
    background-color: rgb(255, 255, 161);
  }
  .bug {
    background-color: #f6d6a7;
  }
  .poison {
    background-color: #e0a7f6;
  }
  .normal {
    background-color: #f4f4f4;
  }
  .fairy {
    background-color: rgba(255, 192, 203, 0.863);
  }
  .fire {
    background-color: #fbe3df;
  }
  .grass {
    background-color: #e2f9e1;
  }
  .water {
    background-color: #e0f1fd;
  }
`;
