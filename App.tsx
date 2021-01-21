import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { UserProvider } from "./src/context/UserContext";

import Routes from "./src/routes/";

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <StatusBar />
        <Routes />
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
