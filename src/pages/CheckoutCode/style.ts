import styled from "styled-components";

export const StyledCheckout = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .animation-div {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .codeList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    font-size: 18px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }

  button,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    background-color: var(--color-primary);
    border-radius: 50%;
    color: #ffffff;
  }

  button:hover,
  a:hover {
    scale: 1.2;
    background-color: var(--color-primary-light);
  }
`;
