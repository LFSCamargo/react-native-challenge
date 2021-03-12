import React from "react";
import { ThemeProvider } from "styled-components";
import { Loading } from "./components";
import { useToken } from "./hooks";
import { Router } from "./router";
import { UserStoreProvider } from "./store";
import theme from "./theme";

export default function App() {
  const { token, loading } = useToken();

  return (
    <ThemeProvider theme={theme}>
      <UserStoreProvider>
        {loading ? <Loading /> : <Router token={token} />}
      </UserStoreProvider>
    </ThemeProvider>
  );
}
