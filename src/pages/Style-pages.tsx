import styled from "styled-components";

export const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

  p {
    padding: 0rem 10rem;
    text-align: center;
  }

  button {
    font-family: "Courier New", Courier, monospace;
    border: none;
    background-color: #dadada;
    padding: 0.5rem 0.7rem;
    margin-top: 0.5rem;
  }

  a {
    text-decoration: none;
  }
`;
