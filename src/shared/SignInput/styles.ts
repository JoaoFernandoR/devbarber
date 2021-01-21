import styled from "styled-components/native";

import { lightBlue } from "../../Colors/colors";

export const SignInput = styled.TextInput`
  background-color: ${lightBlue};
  margin: 20px 0px;
  padding-left: 15px;
`;

export const InputViewer = styled.View`
  flex-direction: row;
  width: 300px;
  background-color: ${lightBlue};
  border-radius: 50px;
  height: 60px;
  align-items: center;
  margin-top: 15px;
  padding-left: 15px;
`;
