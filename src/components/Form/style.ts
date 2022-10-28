import styled from "styled-components";

export const StyleEffectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .effect-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    width: 90%;
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
`;
