import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 100px auto;
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  padding: 1%;
`;

export const DisplayCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
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

export const Title = styled.h3`
  font-weight: lighter;
  font-size: 1.5em;
`;
