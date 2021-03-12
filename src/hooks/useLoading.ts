import { useState } from "react";

export function useLoading() {
  const [loading, triggerLoading] = useState(false);
  const [error, triggerError] = useState("");

  return {
    loading,
    triggerLoading,
    error,
    triggerError,
  };
}
