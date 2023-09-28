import styled from "styled-components";

export const StyledWebOptions = styled.ul`
  display: flex;
  flex-direction: column;

  border: solid 3px;
  border-radius: 15px;
  margin: 10px;
  padding: 20px 15px;
  text-align: center;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px 0px;
  }
  li label {
    margin-right: 5px;
  }
`;

export const StyledCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  button {
    margin: 0;
    border: none;
    background-color: rgba(247, 119, 84, 0.7);
    border-radius: 7px;
    width: 40px;
    color: white;
    font-size: 25px;
    font-weight: bold;
  }

  input {
    border: none;
    text-align: center;
    width: 40px;
    height: 30px;
  }
`;

export const StyledNavBar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #dadada;

  h1 {
    font-size: 1.3rem;
    margin-left: 1rem;
  }

  nav ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }

  nav li {
    padding: 0rem 0.9rem;
  }

  a {
    text-decoration: none;
  }
`;

export const ButtonInfo = styled.button`
  border-radius: 50%;
  margin: 0.5rem;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 50%;
  min-height: 4.5rem;
  border-color: black;
  border-style: solid;
  border-width: 0.2rem;
  border-radius: 1.6rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
