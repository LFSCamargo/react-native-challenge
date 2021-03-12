import { observable, action } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignUpParams, getLoggedUser, loginUser, signUpUser } from "../api";
import { createContext, FC, useContext } from "react";

export class User {
  @observable
  user: User | null = null;

  @action
  getUser = async () => {
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

  @action
  signUp = async (params: SignUpParams) => {
    const { token } = await signUpUser(params);
    await AsyncStorage.setItem("token", token);
    await this.getUser();
  };
}

const context = createContext(new User());

export const UserStoreProvider: FC = ({ children }) => (
  <context.Provider value={new User()}>{children}</context.Provider>
);

export const useUser = () => useContext(context);
