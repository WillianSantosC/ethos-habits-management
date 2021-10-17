import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: red;
  gap: 10px;
  width: 200px;
  height: 200px;

  svg {
    cursor: pointer;
    font-size: 30px;
  }
`;
