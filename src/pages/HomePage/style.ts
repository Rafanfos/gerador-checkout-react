import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 90%;
  padding: 20px;

  h1 {
    font-size: 28px;
  }

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    width: 100%;
    border-radius: 8px;
    color: var(--color-grey-2);
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .label-input {
    display: flex;
    flex-direction: column;
  }

  label {
    position: relative;
    z-index: 2;
    background-color: #ffffff;
    padding: 0.5px;
    border-radius: 2px;
    margin: 0 auto;
    margin-left: 10px;
  }

  select,
  input {
    margin-top: -10px;
    width: 100%;
    border-radius: 8px;
    padding: 10px;
    background-color: transparent;
    border: 1px solid var(--color-grey-1);
  }

  button {
    background-color: var(--color-primary);
    border-radius: 20px;
    width: 100px;
    padding: 10px;
    color: #ffffff;
  }

  .alert {
    color: darkred;
    padding: 2px;
  }

  @media (min-width: 768px) {
    width: 60%;
    margin: 0 80px;

    h1 {
      font-size: inset;
      padding: 30px;
    }
  }
`;
