import React, { Dispatch } from "react";
import { SignInput, InputViewer } from "./styles";

import { darkBlue } from "../../Colors/colors";

interface IInput {
  IconSvg: any;
  placeholder: string;
  isPassword?: boolean;
  value: string;
  onChangeText: Dispatch<string>;
}

export default (props: IInput) => {
  const { IconSvg, placeholder, isPassword, value, onChangeText } = props;

  return (
    <InputViewer>
      <IconSvg width="24" height="24" fill={darkBlue} />
      <SignInput
        placeholder={placeholder}
        secureTextEntry={isPassword}
        value={value}
        onChangeText={onChangeText}
      />
    </InputViewer>
  );
};
