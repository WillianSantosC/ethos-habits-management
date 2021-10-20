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

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: darkorchid;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #ec008c;
  }

  h1::first-child {
    margin-right: auto;
  }

  h2 {
    background-image: var(--button1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
  }

  #label {
    display: flex;
    width: 100%;
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
      border: 4px groove darkorchid;
      border-right: none;
      border-radius: 5px 0 0 5px;
    }

    h2 {
      display: none;
    }

    form {
      width: 60%;
      margin: auto;
      h1 {
        margin-top: 8px;
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

    span {
      color: var(--background);
    }

    h3 {
      width: 68%;
      text-align: justify;
    }

    h1 {
      margin-top: 10px;
    }
  }
`;
