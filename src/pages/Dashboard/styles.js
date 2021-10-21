import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const BoxInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

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
