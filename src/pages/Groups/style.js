import styled from "styled-components";

export const PageContainer = styled.div `
  display: flex;
  width: 100%;
  margin: 100px auto;

  @media (min-width: 1024px) {
    margin: auto;
  }
`;

export const Search = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;
  .MuiOutlinedInput-root {
    background: var(--boxes);
  }

  button {
    margin: 0;
    width: 40%;
  }

  @media (min-width: 1024px) {
    button {
      width: 20%;
    }
  }
`;

export const GroupContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: auto;
  width: 90%;
  padding: 1%;

  ul {
    margin-bottom: 15px;
  }
  @media (min-width: 1024px){
    overflow: auto;
    height: 100vh;

  }
`;

export const DisplayCards = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
  overflow: auto;
  overflow-y: scroll;
  min-height: 125px;
  height: 150px;
  background: #2c212a;
  padding: 3px;
  justify-content: center;
`;

export const Title = styled.h3 `
  font-weight: lighter;
  font-size: 1.5em;
  margin-top: 15px;
`;