import React from "react";
import { observable, action } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLoggedUser, loginUser, User as IUser } from "../api";
import { createContext, FC, useContext } from "react";

export class User {
  @observable
  user: IUser | null = null;

  @action
  getUser = async (shouldTriggerLoading: boolean = false) => {
    const user = await getLoggedUser();
    this.user = user;
  };

  @action
  login = async (email: string, password: string) => {
    const { token } = await loginUser({
      email,
      password,
    });

    await AsyncStorage.setItem("token", token);
    await this.getUser();
  };
}

const context = createContext(new User());

export const UserStoreProvider: FC = ({ children }) => (
  <context.Provider value={new User()}>{children}</context.Provider>
);

export const useUser = () => useContext(context);
