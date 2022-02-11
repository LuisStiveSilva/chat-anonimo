import styled from "styled-components";
import { grey, lightRed, red, white } from "./colors";

export const Container = styled.div`
  padding: 120px 50px 0px;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction ?? "row"};
`;

export const InputText = styled.input`
  background: ${white};
  border: 1px solid ${lightRed};
  border-radius: 15px;
  width: ${(props) => props.width};
  padding: 5px 15px;
  outline: none;
  font-size: 20px;
`;

export const Button = styled.button`
  background: transparent;
  color: ${lightRed};
  border: 1px solid ${lightRed};
  border-radius: 5px;
  transition: 300ms ease all;
  padding: 5px 20px;
  font-size: 16px;
  margin-top: 15px;
  outline: none;
  &:hover {
    background: ${lightRed};
    color: ${white};
    cursor: pointer;
  }
  &:focus {
    background: ${lightRed};
    color: ${white};
  }
`;

export const Card = styled.div`
  width: 100%;
  background: ${grey};
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${white};
  transition: 300ms linear all;
  &:hover {
    background: ${red};
    cursor: pointer;
  }
`;
