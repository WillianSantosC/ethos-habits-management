import styled from "styled-components";

export const MenuContainer = styled.div`
  height: calc(100vh - 60px);
  width: 200px;
  margin: 30px 36px;
  background: linear-gradient(180deg, #ec008c 0%, #fc6767 100%);
  left: 36px;
  top: 31px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;

  h3 {
    span {
      color: var(--background);
    }
  }
`;

export const Li = styled.li`
  margin: 20px 0;
  a {
    color: ${(props) =>
      props.highlighted ? "var(--font-color)" : "var(--font-transparent)"};
  }
`;
