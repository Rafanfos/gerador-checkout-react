import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 28px;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }

  .button {
    background-color: var(--color-primary);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    padding: 10px;
    color: #ffffff;
  }

  .button:hover {
    background-color: var(--color-primary-light);
    transition: 0.5s;
    scale: 1.2;
  }

  .alert {
    color: darkred;
    padding: 2px;
  }

  .hidden {
    display: none;
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
