import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Root from "./routes/root";
//import ErrorPage from "./error-page"
import Books from "./routes/books/books-menu.tsx";
import Loans from "./routes/loans/loans-menu.tsx";
import Members from "./routes/members/members-menu.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },
  { path: "/books", element: <Books /> },
  { path: "/loans", element: <Loans /> },
  { path: "/members", element: <Members /> },

]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
