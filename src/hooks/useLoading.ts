import { useState } from "react";

export function useLoading() {
  const [loading, triggerLoading] = useState(false);

  return {
    loading,
    triggerLoading,
  };
}
