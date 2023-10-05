import React, { createContext, useContext, useState } from "react";
import { theme } from "./context/Theme";

export const Box = () => {
  const [isPrimary, setIsPrimary] = useState(false);

  const theme = useContext(ThemeContext);

  const toggleColor = () => {
    setIsPrimary((prevIsPrimary) => !prevIsPrimary);
  };

  return (
    <div
      onClick={toggleColor}
      style={{
        backgroundColor: isPrimary ? theme.primary.main : theme.secondary.main,
        color: theme.secondary.text,
        cursor: "pointer",
      }}>
      Theme context
    </div>
  );
};

type ThemeContextProviderProp = {
  children: React.ReactNode;
};

const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProp) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const DemoUseContext = () => {
  return (
    <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
};

export default DemoUseContext;
