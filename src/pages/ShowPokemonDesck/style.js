import styled from "styled-components";

export const ShowPokemonDesckContainer = styled.div`
  .showPokemonDesckTodoConteudo {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;
    background: rgb(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .showPokemonDesckContainer {
    position: relative;
    width: 55.56%;
    height: 420px;
  }
  .showPokemonDesckClosedBtn {
    position: absolute;
    top: 0px;
    right: 0;
    cursor: pointer;
  }
  .showPokemonDesckConteudo {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 371px;
    display: flex;
  }

  .showPokemonDesckBoxImgDados {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .showPokemonDesckBoxImg {
    position: relative;
    display: flex;
    width: 45.5%;
    hieght: 100%;
    padding: 10px;
    box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
    border-radius: 8px;
  }

  .showPokemonDesckBoxImg img {
    width: 100%;
    hieght: 100%;
  }

  .showPokemonDesckBoxImgInfo {
    position: absolute;
    display: flex;
    bottom: 6px;
    right: 10px;
  }
  .showPokemonDesckBoxImgInfoPoder,
  .showPokemonDesckBoxImgInfoAcao {
    border-radius: 15px;
    margin-left: 10px;
  }

  .showPokemonDesckBoxImgInfoPoder p,
  .showPokemonDesckBoxImgInfoAcao p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 5px 15px;
    color: #ffffff;
  }

  .showPokemonDesckBoxDados {
    width: 56.5%;
    height: 100%;
    margin-left: -4px;
    padding-left: 4px;
    background: #ffffff;
    border-radius: 0px 8px 8px 0px;
  }
  .showPokemonDesckHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 26px 23px 9px 46px;

    h1 {
      font-family: "Karla";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 42px;
      color: #444444;
      text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    }

    p {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      color: #fb6c6c;

      opacity: 0.5;
    }
  }

  .showPokemonDesckInfo {
    width: 80%;
    padding: 0;
    margin: auto;
    margin-bottom: 13px;

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #303943;
    }
  }

  .showPokemonDesckPesoAlturaPoder {
    display: flex;
    margin-left: 48px;
    margin-right: 38px;
    justify-content: space-between;
  }

  .showPokemonDesckPeso,
  .showPokemonDesckAltura,
  .showPokemonDesckPoder {
    width: 127px;
    height: 68px;
    display: block;
  }

  .showPokemonDesckPeso,
  .showPokemonDesckAltura {
    border-right: 3px solid #e0e0e0;
  }

  .showPokemonDesckPesoInfo {
    display: flex;
    justify-content: space-evenly;
    margin-top: 13px;

    img {
      width: 16px;
      height: 16px;
    }
    p {
      display: flex;
      align-items: center;
      text-align: justify;
      color: #212121;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin-right: 20px;
    }
  }

  .showPokemonDesckSobrePeso,
  .showPokemonDesckSobreAltura,
  .showPokemonDesckSobrePoder {
    align-items: center;
    text-align: center;
    margin-top: 10px;
    color: #767676;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  }

  .showPokemonDesckAlturaInfo {
    display: flex;
    justify-content: space-evenly;
    margin-top: 13px;

    p {
      align-items: center;
      text-align: justify;
      color: #212121;
      flex: none;
      order: 1;
      flex-grow: 0;
    }
    img {
      width: 8px;
      height: 16px;
    }
  }

  .showPokemonDesckPoderInfo {
    display: block;
    text-align: center;
    width: 50px;
    margin: auto;

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
      text-align: justify;
      color: #212121;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }

  .showPokemonDesckGraficos {
    display: block;
    margin-left: 48px;
    margin-right: 46px;
    margin-top: 25px;
  }

  .showPokemonDesckGraficoAtaque,
  .showPokemonDesckGraficoDefesa,
  .showPokemonDesckGraficoVlAtaque,
  .showPokemonDesckGraficoVlTotal {
    display: flex;
    align-items: center;
  }

  .showPokemonDesckGraficoNome p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #444444;
    width: 75px;
  }

  .showPokemonDesckGraficoNumero {
    width: 30px;
    display: flex;
    justify-content: center;
  }
  .showPokemonDesckGraficoNumero p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #303943;
  }

  .showPokemonDesckGraficoBarra {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3px;
    background: #f4f5f4;
    margin-left: 13px;
  }

  .showPokemonDesckGraficoBarraAtaque {
    width: 84%;
    height: 3px;
    backgroung: red;
    background: #48d0b0;
    border-radius: 10px;
  }

  .showPokemonDesckGraficoBarraDefesa {
    width: 74%;
    height: 3px;
    backgroung: red;
    background: #fb6c6c;
    border-radius: 10px;
  }
  .showPokemonDesckGraficoBarraVlAtaque {
    width: 94%;
    height: 3px;
    backgroung: red;
    background: #48d0b0;
    border-radius: 10px;
  }
  .showPokemonDesckGraficoBarraTotal {
    width: 64%;
    height: 3px;
    backgroung: red;
    background: #4bc07a;
    border-radius: 10px;
  }

  /* ###########  MEDIA QUERY  ########## */
  @media (max-width: 992px) {
    .showPokemonDesckContainer {
      width: 74.56%;
      height: 410px;
    }
  }
  @media (max-width: 768px) {
    .showPokemonDesckContainer {
      width: 90%;
      height: 583px;
      display: block;
    }
    .showPokemonDesckClosedBtn {
      top: -35px px;
    }
    .showPokemonDesckConteudo {
      width: 100%;
      height: 100%;
      display: block;
    }
    .showPokemonDesckBoxImgDados {
      width: 100%;
      height: 100%;
      display: block;
    }
    .showPokemonDesckBoxImg {
      width: 100%;
      hieght: 100%;
      padding: 10px;
    }
    .showPokemonDesckBoxDados {
      width: 100%;
      height: 65%;
      border-radius: 0px 0px 8px 8px;
      padding-top: 3px;
      margin-top: -9px;
      margin-left: 0;
    }
  }
`;
