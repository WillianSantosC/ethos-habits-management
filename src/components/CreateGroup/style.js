import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  background: var(--input-background);
  padding: 10px;
  border-radius: 8px;

  .MuiOutlinedInput-root {
    background: var(--boxes);
  }

  .MuiOutlinedInput-input {
    color: #ffffffe6;
  }
  .MuiInputBase-input {
    color: white;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--boxes);
  }

  .MuiFormLabel-root.Mui-focused {
    color: #ffffff;
    font-weight: bolder;
  }

  form {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button {
      width: 60%;
    }
  }
`;
