import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/Routes.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster
          toastOptions={{
            duration: 2000,
            removeDelay: 1000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
          position="top-right"
          reverseOrder={false}
        />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
