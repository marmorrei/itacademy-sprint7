import styled from "styled-components";

export const StyledWebOptions = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 20%;
  border: solid 3px;
  border-radius: 15px;
  margin: 10px;
  padding: 25px 15px;
  text-align: center;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px 0px;
  }
`;

export const StyledCount = styled.div`
  button {
    border: none;
    background-color: rgba(247, 119, 84, 0.7);
    border-radius: 7px;
    width: 30px;
    color: white;
    font-size: 25px;
    font-weight: bold;
  }

  input {
    border: none;
    width: 40px;
    height: 30px;
  }
`;
