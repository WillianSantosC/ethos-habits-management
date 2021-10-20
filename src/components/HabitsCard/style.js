import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--boxes);
  gap: 5px;
  width: 75%;
  min-height: 125px;
  border-radius: 6px;
  border: 1px solid var(--background);
  margin: 1% 0;

  svg {
    cursor: pointer;
    font-size: 30px;
    color: var(--background);
  }

  #PinIcon {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    max-width: 220px;
  }
`;

export const CardText = styled.p`
  color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
`;

export const CardTitle = styled(CardText)`
  font-weight: bold;
  width: 95%;
  text-align: center;
`;

export const SideComponent = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DataComponent = styled(SideComponent)`
  justify-content: center;
  padding: 1%;
`;

export const PinComponent = styled(SideComponent)`
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  width: 65%;
`;
