import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import theme from "./theme.js";
import router from "./routing/routes.jsx";
import global_en from "./translations/en/global.json";
import global_uz from "./translations/uz/global.json";
import global_uz_cr from "./translations/uz_cr/global.json";
import global_ru from "./translations/ru/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    uz: {
      global: global_uz,
    },
    uz_cr: {
      global: global_uz_cr,
    },
    ru: {
      global: global_ru,
    },
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      // gcTime: 300_000, //5m
      // staleTime: 300_000, //5m
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // refetchOnMount: false,
      // retryDelay: 3000, // 3s
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <I18nextProvider i18n={i18next}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </I18nextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
