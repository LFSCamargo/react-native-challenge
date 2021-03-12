import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(async (config) => {
  const token: string | null = await AsyncStorage.getItem("token");

  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: token,
    },
  };
});

export type User = {
  name: string;
  email: string;
  _id: string;
  birthDate: string;
};

export async function getLoggedUser() {
  const { data } = await api.get("/me");
  return data;
}

type AuthOutput = {
  token: string;
};

export async function loginUser(params: { email: string; password: string }) {
  const { data } = await api.post<AuthOutput>("/login", {
    ...params,
  });
  return data;
}

export type SignUpParams = {
  email: string;
  name: string;
  birthDate: string;
  password: string;
};

export async function signUpUser(params: SignUpParams) {
  const { data } = await api.post<AuthOutput>("/register");
  return data;
}
