import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

export function useToken() {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const getData = useCallback(async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem("token");
    setToken(token);
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return {
    token,
    loading,
  };
}
