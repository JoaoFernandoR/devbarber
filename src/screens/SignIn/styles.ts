import styled from "styled-components/native";

import { mainBlue, darkBlue, mainWhite } from "../../Colors/colors";

export const Viewer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${mainBlue};
`;

export const SignButton = styled.TouchableOpacity`
  background-color: ${darkBlue};
  height: 60px;
  width: 300px;
  border-radius: 30px;
  margin: 20px 0px;
  justify-content: center;
  align-items: center;
`;

export const SignButtonText = styled.Text`
  color: ${mainWhite};
  font-size: 18px;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 50px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: ${darkBlue};
`;

export const SignMessageButtonBold = styled.Text`
  font-size: 16px;
  color: ${darkBlue};
  font-weight: bold;
  margin-left: 5px;
`;
