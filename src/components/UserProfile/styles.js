import styled from "styled-components";

export const UserContainer = styled.div `
  position: fixed;
  top: 0;
  display: flex;
  color: white;
  height: 100px;
  padding: 20px 10px;
  background-color: var(--background);
  width: 100vw;

  > img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 3px solid #C4C4C4;
    margin: 3px 10px;
  }

  .infoContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 60px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .name {
        span {
          padding: 5px 0 0 10px;
          font-weight: 500;
          font-size: 1.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 300px;
          &::before{
            content: 'Olá, ';
          }
        }
        img {
          margin-left: 5px;
          width: 20px;
          height: 25px;
          transform: translateY(-5px);
          display: none;
        }
      }
      .email {
        display: none;
      }

      .mobileLogOff {
        width: 25px;
        position: absolute;
        top: 20px;
        right: 40px;
      }
    }
    

  @media (min-width: 1024px){
    position: static;
    display: flex;
    justify-content: flex-start;
    background: none;
    height: 65px;
    margin-left: -5px;
    width: 200px;

    >img{
      margin: 0 10px 0 -5px;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      border: 3px solid #C4C4C4;
    }
    
    .infoContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 45px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        display: block;
      }
      
      .name {
        display: flex;
        flex-direction: row;
        max-width: 100px;

        span {
        font-size: 0.8rem;
        overflow: hidden;
        padding: 0;
        text-overflow: ellipsis;
        display: block;
        &::before{
          content: none;
        }
      }
        img{
          display: block;
        }
      }
      .email {
        display: block;
        font-size: 0.8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100px;
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100px;
          display: block;
        }
      }

      img {
        margin-left: 5px;
        width: 20px;
        height: 25px;
        transform: translateY(-5px);
        display: block;
      }
      .mobileLogOff {
        display: none;
      }
    }
  }
`;