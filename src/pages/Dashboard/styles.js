import styled from "styled-components";

export const DashboardContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin: 100px 0;

  @media (min-width: 1024px){
    flex-direction: row;
    margin: 0;
  }
`;

export const BoxInfoContainer = styled.div `
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
    font-weight: lighter;
  }

  @media (min-width: 1024px){
    width: 90%;
    h1{
      padding-top: 10%;
      font-size: 3rem;
      width: 90%;
      font-weight: lighter;
    }

    h2 {
      margin-top: 50px;
      font-size: 1.8rem;
      font-weight: lighter;
      width: 90%;

      &::before{
        content: "Olá, ";
      }
      &::after{
        content: "!";
      }
    }
  }
`