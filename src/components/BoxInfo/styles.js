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
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin: 2% 5% 0 20px;
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
        text-align: center;
        width: 100%;
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

    .extraBox {
      height: 100%;
      flex-basis: 90%;
      padding: 3% 0;

      .devTeam {
        height: 100%;
      }

      div {
        height: 100%;
        justify-content: space-around;
        padding: 1%;

        .funFact {
          margin: 10px 20px;
          height: 50%;
          font-size: 1.1rem;
          text-align: center;
        }
      }
      .devDiv {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;

        div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          a {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: space-around;
            align-items: center;
            flex-grow: 0;
            padding-left: 50px;
            margin-top: 5%;
            color: var(--background);

            img {
              display: block;
              border-radius: 50%;
              width: 20%;
            }
            span {
              width: 50%;
              text-align: start;
              font-size: 1.5rem;
            }
          }
        }
      }
    }

    @media (min-width: 1024px) {
      .extraBox {
        width: 100%;
        flex-basis: 88%;
        .devTeam {
          height: 100%;
          padding-bottom: 0;
        }

        div {
          height: 100%;
          justify-content: space-around;
          padding: 1%;

          .funFact {
            margin: 10px 20px;
            height: 50%;
            text-align: center;
          }
        }

        .devDiv {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          div {
            transition: ease-in;
            a {
              width: 100%;
              flex-direction: column;
              padding: 0;
              margin-top: 0;

              img {
                border-radius: 50%;
                width: 50%;
                margin-bottom: 20px;
              }
              span {
                text-align: center;
              }
              &:hover {
                color: var(--details);
                img {
                  border: 3px solid var(--details);
                  margin: 0 -3px 20px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    width: 100%;
    justify-content: space-evenly;
    ul {
      width: 100%;
      li {
        div {
          align-items: flex-start;
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
