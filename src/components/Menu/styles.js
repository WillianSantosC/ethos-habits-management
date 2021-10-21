import styled from "styled-components";



export const MenuContainer = styled.div `
z-index: 1;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  background: #1b1a24;
  height: 100px;
  align-items: center;

  h3 {
    display: none;
  }

  nav {
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
  @media (min-width: 1024px) {
    position: static;
    height: calc(100vh - 60px);
    width: 13%;
    min-width: 250px;
    margin: 30px 36px;
    background: linear-gradient(180deg, #ec008c 0%, #fc6767 100%);
    left: 36px;
    top: 31px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px;
    align-items: flex-start;

    .iconImage {
      display: none;
    }

    h3 {
      display: block;
      img{
        width: 100px;
      }
    }
    nav {
      margin-top: 40px;
      flex-grow: 1;

      ul {
        display: block;
      }
    }
  }
`;

export const Li = styled.li `
  margin-top: 5px;
  display: flex;
  align-items: center;

  a {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) =>
      props.highlighted ? "var(--font-color)" : "var(--font-transparent)"};

    .iconImage {
      width: 45px;
      margin-bottom: 4px;
    }
  }

  @media (min-width: 1024px) {
    margin: 20px 0;

    a {
      display: block;
      text-align: start;
    }
  }
`;