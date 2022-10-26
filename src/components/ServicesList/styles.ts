import styled from "styled-components";

export const StyleActivity = styled.ul`
  display: flex;
  /* flex-direction: column; */
  gap: 25px;
  align-items: center;
  border-radius: 8px;
  max-height: 60%;
  max-width: 95%;
  overflow: auto;
  padding: 20px;

  li {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    min-width: 100%;
    border-radius: 8px;
    border: solid var(--grey-0);
    padding: 10px;
    font-size: 14px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 2px 0px;
    min-height: 100px;
    background-color: var(--color-primary-light);
    color: white;
  }

  img {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 728px) {
    min-height: 200px;
    max-height: 400px;
    width: 400px;
    flex-direction: column;

    li {
      min-height: 100px;
    }
  }
`;
