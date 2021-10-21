import styled, { keyframes } from "styled-components";

const apear = keyframes`
  from{
    opacity:0;
    transform: translateX(40px);

  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  overflow: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 0;
    .laPPEe {
      animation: ${apear} 0.9s;
    }
  }
`;

export const BoxInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding-top: 10%;
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 5%;
  }

  @media (min-width: 1024px) {
    width: 90%;
    overflow: auto;
    height: 100vh;
    h1 {
      padding-top: 2%;
      font-size: 2.5rem;
      width: 90%;
      /* font-weight: lighter; */
    }

    h2 {
      margin-top: 30px;
      font-size: 1.5rem;
      margin-left: 5px;
      font-weight: lighter;
      width: 90%;

      &::before {
        content: "Olá, ";
      }
      &::after {
        content: "!";
      }
    }
  }
`;
