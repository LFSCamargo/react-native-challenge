import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationContainerRef } from "@react-navigation/core";
import { createStackNavigator } from "@react-navigation/stack";
import { Stacks } from "./routes";
import { PrivateStack, PublicStack } from "./stacks";
import { StatusBar } from "react-native";

const MainStack = createStackNavigator();

interface Props {
  token?: string;
  setNavigationTop?: (navigatorRef: NavigationContainerRef) => void;
}

export function Router({ setNavigationTop, token }: Props) {
  return (
    <>
      <NavigationContainer ref={setNavigationTop}>
        <StatusBar barStyle="light-content" />
        <MainStack.Navigator
          headerMode="none"
          initialRouteName={token ? Stacks.Private : Stacks.Public}
        >
          <MainStack.Screen name={Stacks.Private} component={PrivateStack} />
          <MainStack.Screen name={Stacks.Public} component={PublicStack} />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}
