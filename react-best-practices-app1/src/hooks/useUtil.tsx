import { useState } from "react";

// custom hook
export const useUtil = () => {
  const [config] = useState({ appName: "React 19" });
  return { config };
};
