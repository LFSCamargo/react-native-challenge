import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Login, Version } from "../screens";
import { Routes } from "./routes";

const Private = createDrawerNavigator();
const Public = createStackNavigator();

export const PublicStack = (): JSX.Element => (
  <Public.Navigator initialRouteName={Routes.Login} headerMode="none">
    <Public.Screen name={Routes.Login} component={Login} />
  </Public.Navigator>
);

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator>
    <Private.Screen name={Routes.Home} component={Home} />
    <Private.Screen name={Routes.Version} component={Version} />
  </Private.Navigator>
);
