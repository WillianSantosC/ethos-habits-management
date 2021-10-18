import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-around;
  > img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 2px solid gray;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 45px;
    span {
      font-size: 0.7rem;
    }
    img {
      margin-left: 5px;
      width: 20px;
      height: 25px;
      transform: translateY(-9px);
    }
  }
`;
