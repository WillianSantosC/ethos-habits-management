import styled from "styled-components";

export const DataContainer = styled.div `
  display: flex;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    li {
      background: var(--boxes);
      border-radius: 6px;
      height: 200px;
      color: var(--background);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin: 5%;
      flex-shrink: 0;
      flex-grow: 0;
      flex-basis: 40%;
      min-width: 150px;


      div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .boxTitle {
        font-weight: 700;
        font-size: 2rem;
      }
      img {
        display: none;
      }

      .boxNumber {
        margin-top: 10px;
        font-size: 3.5rem;
        color: var(--details);
        margin-bottom: 20px;
      }
    } 
  }
  @media (min-width: 1024px) {
    width: 100%;
    justify-content: space-evenly;
    ul {
      width: 100%;
      li {
        div{
          align-items: flex-start
        }
        .boxTitle {
        }
        img {
          display: block;
          width: 50px;
        }

        .boxNumber {
        }
      }
    }
  }
`;