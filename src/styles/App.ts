import styled from "styled-components";

export const AppRoot = styled.div`
  min-height: 100vh;
  max-width: 1440px;
  background-color: var(--background-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;

  @media (min-width: 768px) {
    height: 100%;
  }
`;
