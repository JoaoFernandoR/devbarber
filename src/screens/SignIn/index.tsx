import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";

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

  const { signIn } = useContext(UserContext);

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email === "" || password === "") return;

    const user = {
      email,
      password,
    };

    signIn(user);
  };

  return (
    <Viewer>
      <BarberLogo width="100%" height={163} style={{ marginBottom: 15 }} />

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

      <SignMessageButton
        onPress={() =>
          navigation.reset({
            routes: [{ name: "SignUp" }],
          })
        }
      >
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonBold>Cadastre-se</SignMessageButtonBold>
      </SignMessageButton>
    </Viewer>
  );
};

export default SignIn;
