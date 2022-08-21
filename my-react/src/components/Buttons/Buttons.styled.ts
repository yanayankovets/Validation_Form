import styled from "styled-components";

export const StyledSubmitButton = styled.button`
  width: 80px;
  height: 30px;
  margin: 20px 5px 0 0;
  background: #a6f64d;
  border: 1px solid gray;
  border-radius: 5px;
  font-family: Athelas, serif;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background: #87cb49;
  }
`;

export const StyledResetButton = styled.button`
  width: 80px;
  height: 30px;
  margin-top: 20px;
  background: #f97d64;
  border: 1px solid gray;
  border-radius: 5px;
  font-family: Athelas, serif;
  font-size: 16px;
  cursor: pointer;

  :hover {
    background: #d56550;
  }
`;