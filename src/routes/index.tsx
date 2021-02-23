import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

import AuthRoute from "./auth.routes";
import HomeRoute from "./home.routes";

const Routes = () => {
  const { signed } = useContext(UserContext);
  console.log(signed);

  return !signed ? <AuthRoute /> : <HomeRoute />;
};

export default Routes;
