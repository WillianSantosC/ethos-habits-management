import styled from "styled-components";
import Button from "../../components/Button";

export const Container = styled.div`
  background: var(--input-background);
  padding: 15px;
  border-radius: 8px;
  width: 80%;
  margin: auto;
  text-align: center;
  margin-bottom: 20px;

  .MuiOutlinedInput-root {
    background: var(--boxes);
  }

  .MuiOutlinedInput-input {
    color: #ffffffe6;
  }
  .MuiInputBase-input {
    color:#ffffffe6 ;
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

export const Card = styled.div`
  background: gray;
  margin-bottom: 10px;

  svg {
    font-size: 18px;
    cursor: pointer;
  }
`;

export const GoalsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const ButtonComponent = styled(Button)`
  width: 100px;

  a {
    color: var(--font-color);
  }
`;
