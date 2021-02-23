import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api";

interface IUser {
  email: string;
  password: string;
  name?: string;
}

interface IUserContext {
  signIn(user: IUser): void;
  signUp(user: IUser): void;
  signed: boolean;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: any) => {
  const [Myuser, setMyUser] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const asyncUser = await AsyncStorage.getItem("@user");

      if (asyncUser) return setMyUser(JSON.parse(asyncUser));
    };

    checkToken();
  }, []);

  const signIn = async (user: IUser) => {
    try {
      const result = await api.post("/auth/login", user);

      if (result.data.token) {
        await AsyncStorage.setItem("@token", result.data.token);
        await AsyncStorage.setItem("@user", JSON.stringify(result.data.data));

        setMyUser(result.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (user: IUser) => {
    try {
      const result = await api.post("/user", user);

      if (result.data.token) {
        await AsyncStorage.setItem("@token", result.data.token);
      } else {
        alert("Erro: " + result.data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkToken = async () => {
    try {
      const result = await api.post("/auth/refresh");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{ signIn, signUp, signed: Boolean(Myuser) }}>
      {children}
    </UserContext.Provider>
  );
};
