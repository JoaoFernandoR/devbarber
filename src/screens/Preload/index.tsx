import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import BarberLogo from "../../../assets/barber.svg";

import { Viewer, LoadingIcon } from "./styles";
import { mainWhite } from "../../Colors/colors";

const Preload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        // validar o token
      } else {
        navigation.navigate("SignIn");
      }
    };

    checkToken();
  }, []);

  return (
    <Viewer>
      <BarberLogo width="100%" height={163} />
      <LoadingIcon size="large" color={mainWhite} />
    </Viewer>
  );
};

export default Preload;
