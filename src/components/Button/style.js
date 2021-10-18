import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) =>
    props.pinkSchema
      ? "linear-gradient(90deg, #EC008C 0%, #FC6767 100%)"
      : "linear-gradient(90deg, #6909B4 0%, #7E23C6 50.52%, #B45EF7 100%)"};
  color: var(--font-color);
  height: 45px;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  width: 100%;
`;
