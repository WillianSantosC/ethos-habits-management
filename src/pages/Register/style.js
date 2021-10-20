import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .MuiOutlinedInput-input {
    color: #ffffffe6;
  }
  .MuiSvgIcon-root {
    color: #46454e;
  }
  .MuiInputBase-input {
    background-color: #46454e;
    color: white;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #46454e;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #ffffffa1;
    font-weight: bolder;
  }

  h1::first-child {
    margin-right: auto;
  }
  h1 {
    margin-bottom: 3vh;
  }

  h2 {
    background-image: var(--button1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
    font-size: 2rem;
    margin-top: -1vh;
  }

  #label {
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--input-color);

    div {
      border: 1px solid var(--input-color);
      border-radius: 8px;
      width: 80%;
      height: 0;
    }
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;

    #form-container {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px groove #ec008c;
      border-right: none;
      border-radius: 5px 0 0 5px;
      background-color: #1d1b24;
    }

    h2 {
      display: none;
    }

    form {
      width: 60%;
      margin: auto;
      h1 {
        margin-top: -5px;
        margin-bottom: 3vh;
        font-size: 1.7rem;
      }
    }
  }
`;

export const Animation = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    background: var(--button1);
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 0 5px 5px 0;
    width: 50vw;
    height: 90vh;

    span {
      color: var(--background);
      font-size: 1.5rem;
    }

    h3 {
      width: 68%;
      text-align: justify;
    }

    h1 {
      margin-top: 5px;
      font-size: 0.9rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
