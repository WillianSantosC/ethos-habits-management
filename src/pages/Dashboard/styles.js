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

  @media (min-width: 1024px){
    width: 90%;
  }
`