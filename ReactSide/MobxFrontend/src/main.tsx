import React from "react";
import ReactDOM from "react-dom/client";
import "./app/layout/styles.css";
import "react-calendar/dist/Calendar.css";
import { store, StoreContext } from "./app/stores/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router}></RouterProvider>
    </StoreContext.Provider>
  </React.StrictMode>
);
