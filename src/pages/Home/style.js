import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  padding: 0px;
  height: 100%;

  section {
    display: block;
    float: left;
    width: 465px;
    height: 100%;
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
    display: flex;
    justify-content: right;
    margin-top: 67px;
    width: 865px;
  }

  article img {
    width: 793px;
    border: 1px solid blue;
  }

  /* ###### MEDIA QUERY ##### */
  @media (max-width: 576px) {
    section {
      width: 100%;
      padding-top: 29px;
      margin: auto;
      padding-left: 26px;
      padding-right: 26px;
      height: 283px;
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
    }
    article img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    section {
      width: 200px;
      padding-top: 29px;
      margin: auto;
      padding-left: 26px;
      padding-right: 26px;
      height: 283px;
    }
  }
`;
