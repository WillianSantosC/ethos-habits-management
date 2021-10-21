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

  @media (min-width: 1024px) {
    width: 90%;
  }
`;
