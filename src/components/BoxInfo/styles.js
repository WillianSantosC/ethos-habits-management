import styled from "styled-components";

export const DataContainer = styled.div`
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
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 5%;
      flex-shrink: 0;
      flex-grow: 0;
      flex-basis: 40%;
      min-width: 150px;

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

    @media (min-width: 1024px) {
      ul {
        li {
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
  }
`;
