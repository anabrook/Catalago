// app/providers.tsx
"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { CacheProvider } from "@chakra-ui/next-js";
import React from "react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#A11CF3",
  },
};

export const theme = extendTheme({ colors });

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

export default Providers;
