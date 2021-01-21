import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

import BarberLogo from "../../../assets/barber.svg";
import EmailSvg from "../../../assets/email.svg";
import LockSvg from "../../../assets/lock.svg";

import SignInput from "../../shared/SignInput";

import {
  Viewer,
  SignButton,
  SignButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonBold,
} from "./styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    console.log(user);
  };

  return (
    <Viewer>
      <BarberLogo width="100%" height={163} />

      <SignInput
        IconSvg={EmailSvg}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <SignInput
        IconSvg={LockSvg}
        placeholder="Digite sua Senha"
        isPassword
        value={password}
        onChangeText={setPassword}
      />

      <SignButton onPress={handleSubmit}>
        <SignButtonText> LOGIN </SignButtonText>
      </SignButton>

      <SignMessageButton>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonBold>Cadastre-se</SignMessageButtonBold>
      </SignMessageButton>
    </Viewer>
  );
};

export default SignIn;
