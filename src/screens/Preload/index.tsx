import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BarberLogo from "../../../assets/barber.svg";

import { Viewer, LoadingIcon } from "./styles";
import { mainWhite } from "../../Colors/colors";

const Preload = () => {
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("@token");

      console.log(token);
      if (token) {
        await AsyncStorage.clear();
      } else {
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
