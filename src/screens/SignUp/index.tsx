import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../context/UserContext";

import BarberLogo from "../../../assets/barber.svg";
import EmailSvg from "../../../assets/email.svg";
import LockSvg from "../../../assets/lock.svg";
import Person from "../../../assets/person.svg";

import SignInput from "../../shared/SignInput";

import {
  Viewer,
  SignButton,
  SignButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonBold,
} from "./styles";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useContext(UserContext);

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (name === "" || email === "" || password === "") return;

    const user = {
      name,
      email,
      password,
    };

    signUp(user);
  };
  return (
    <Viewer>
      <BarberLogo width="100%" height={163} style={{ marginBottom: 15 }} />
      <SignInput
        IconSvg={Person}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
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
        <SignButtonText> CADASTRAR </SignButtonText>
      </SignButton>

      <SignMessageButton
        onPress={() =>
          navigation.reset({
            routes: [{ name: "SignIn" }],
          })
        }
      >
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonBold>Faça Login</SignMessageButtonBold>
      </SignMessageButton>
    </Viewer>
  );
};
