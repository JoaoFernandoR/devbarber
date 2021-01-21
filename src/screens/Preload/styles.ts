import styled from "styled-components/native";

import { mainBlue } from "../../Colors/colors";

export const Viewer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${mainBlue};
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 25px;
`;
