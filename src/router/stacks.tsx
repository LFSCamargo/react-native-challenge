import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, SignUp } from "../screens";
import { Routes } from "./routes";

const Private = createStackNavigator();
const Public = createStackNavigator();

export const PublicStack = (): JSX.Element => (
  <Public.Navigator initialRouteName={Routes.Login} headerMode="none">
    <Public.Screen name={Routes.Login} component={Login} />
    <Public.Screen name={Routes.SignUp} component={SignUp} />
  </Public.Navigator>
);

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator headerMode="none">
    <Private.Screen name={Routes.Home} component={Home} />
  </Private.Navigator>
);
