import styled from "styled-components";

export const Container = styled.div`
  background: var(--input-background);
  padding: 15px;
  border-radius: 8px;
  width: 80%;
  margin: auto;
  text-align: center;

  .MuiOutlinedInput-root {
    background: var(--boxes);
  }

  .MuiOutlinedInput-input {
    color: #ffffffe6;
  }
  .MuiInputBase-input {
    color: black;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--boxes);
  }

  .MuiFormLabel-root.Mui-focused {
    color: #ffffff;
    font-weight: bolder;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    button {
      width: 60%;
    }
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;
