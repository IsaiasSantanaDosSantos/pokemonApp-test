import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  padding: 0px;
  height: 100%;

  .homeContainer {
    width: 100%;
    justify-content: space-between;
  }
  section {
    display: inline-block;
    float: left;
    width: 465px;
    padding-top: 105px;
    margin-left: 165px;

    border: 1px solid black;
  }
  h1 {
    font-family: "Inter";
    position: relative;
    font-style: normal;
    font-weight: 800;
    font-size: 54px;
    line-height: 76px;
    color: #282828;
  }
  .homeRetangulo {
    position: absolute;
    top: 114px;
    left: 142px;
    z-index: -1;
    width: 284px;
    height: 25px;
    background: #ffda55;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 36px;
    letter-spacing: 0.02em;
    color: #282828;
    margin-top: 18px;
  }
  .homeBtn {
    width: 231px;
    margin-top: 43px;
  }
  button {
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
    width: 231px;
    height: 66px;
    border: none;
  }

  article {
    display: inline-block;
    float: right;
    margin-top: 67px;
    width: 793px;

    border: 1px solid blue;
  }

  article img {
    width: 793px;
  }

  /* ###### MEDIA QUERY ##### */

  @media (max-width: 576px) {
    .homeContainer {
      display: flex;
      flex-direction: column;
    }
    section {
      width: 100%;
      margin: auto;
      padding-top: 10px;
      order: 2;
    }
    h1 {
      position: relative;
      font-size: 32px;
      line-height: 38px;
      width: 273px;
      margin: auto;
    }
    .homeRetangulo {
      top: 56px;
      left: 83px;
      width: 167px;
      height: 15px;
    }
    p {
      line-height: 23px;
      letter-spacing: 0px;
      width: 311px;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 25px;
    }
    .homeBtn {
      width: 232px;
      margin: auto;
      margin-top: 43px;
    }

    article {
      width: 100%;
      margin-top: 0px;
      order: 1;
    }
    article img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .homeContainer {
      display: flex;
      flex-direction: column;
    }
    section {
      width: 100%;
      margin: auto;
      margin-top: 0px;
      padding: 10px 10px 30px 10px;
      order: 2;
    }
    article {
      width: 100%;
      margin-top: 0px;
      order: 1;
    }
    article img {
      width: 100%;
    }
    h1 {
      position: relative;
      font-size: 56px;
      line-height: 61px;
      width: 477px;
      margin: auto;
    }
    .homeRetangulo {
      top: 90px;
      left: 144px;
      width: 293px;
      height: 25px;
    }
    p {
      line-height: 23px;
      letter-spacing: 0px;
      width: 384px;
      margin: auto;
      margin-top: 23px;
      margin-bottom: 25px;
    }
    .homeBtn {
      width: 232px;
      margin: auto;
      margin-top: 43px;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 992px) {
    .homeContainer {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    section {
      width: 100%;
      margin: auto;
      margin-top: 0px;
      padding: 10px 10px 30px 10px;
      order: 2;
    }
    article {
      width: 100%;
      margin-top: 0px;
      order: 1;
    }
    article img {
      width: 100%;
    }
    h1 {
      position: relative;
      font-size: 56px;
      line-height: 61px;
      width: 477px;
      margin: auto;
    }
    .homeRetangulo {
      top: 90px;
      left: 144px;
      width: 293px;
      height: 25px;
    }
    p {
      line-height: 23px;
      letter-spacing: 0px;
      width: 384px;
      margin: auto;
      margin-top: 23px;
      margin-bottom: 25px;
    }
    .homeBtn {
      width: 232px;
      margin: auto;
      margin-top: 43px;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 1200px) {
    .homeContainer {
      display: flex;
      width: 100%;
    }
    section {
      display: block;
      float: left;
      width: 477px;
      padding-top: 105px;
    }
    h1 {
      position: relative;
      font-size: 56px;
      line-height: 61px;
      width: 471px;
      margin: auto;
    }
    .homeRetangulo {
      top: 90px;
      left: 144px;
      width: 293px;
      height: 25px;
    }
    article {
      width: 100%;
      margin-top: 67px;
    }
  }

  @media (min-width: 1201px) {
    section {
      margin-left: 75px;
    }
    article {
      width: 657px;
      margin-top: 67px;
    }
  }

  @media (min-width: 1400px) {
    section {
      margin-left: 165px;
    }
    article {
      width: 768px;
    }
  }
  @media (min-width: 1500px) {
    article {
      width: 793px;
    }
  }
`;