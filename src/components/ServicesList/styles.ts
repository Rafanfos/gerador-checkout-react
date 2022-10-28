import styled from "styled-components";

export const StyleActivity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;

  ul {
    display: flex;
    gap: 40px;
    align-items: center;
    border-radius: 8px;
    /* height: 150px; */
    max-width: 95%;
    overflow: auto;
    padding: 20px 30px;
  }

  li {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    min-width: 98%;
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
    background-color: #ffffff;
    border-radius: 50%;
  }

  @media (min-width: 728px) {
    ul {
      /* height: 300px; */
      width: 400px;
      flex-direction: column;
      padding: 30px;
      gap: 10px;
    }
    li {
      min-height: 100px;
    }
  }
`;
