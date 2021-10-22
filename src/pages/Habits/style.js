import styled from "styled-components";

export const PageContainer = styled.div `
  display: flex;
  width: 100%;
  margin: 100px auto;

  @media (min-width: 1024px) {
    margin: auto;
  }
`;

export const CardContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const HabitsContainer = styled.div `
  display: flex;
  width: 95%;
  padding: 1%;
  flex-direction: column;
  @media (min-width: 1024px){
    overflow: auto;
    height: 100vh;

  }
`;

export const Form = styled.div `
  background: var(--input-background);
  margin: auto;
  padding: 10px;
  border-radius: 8px;
  line-height: 2;
  text-align: center;

  .MuiOutlinedInput-root {
    height: 30px;
    border-radius: 10px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    button {
      width: 50%;
    }
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;