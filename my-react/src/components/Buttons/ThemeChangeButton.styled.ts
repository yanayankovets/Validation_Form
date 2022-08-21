import styled from "styled-components";

interface Props {
  isDarkTheme: boolean;
}

export const StyledThemeChangeButton = styled.button<Props>`
  width: 160px;
  height: 40px;
  margin: 10px;
  background: ${props => props.isDarkTheme ? "#9567d2" : "#a8e859"};
  border: 1px solid gray;
  border-radius: 5px;
  font-family: Athelas, serif;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`;