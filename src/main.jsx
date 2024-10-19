import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/login',
    element:<LoginPage buttonText="Login" loginWithGoogleText="Log in with Google" title='Welcome'/>
  },
 {
  path:'/register',
  element:<LoginPage buttonText="Sign Up" loginWithGoogleText="Register with Google" displayNone="displayNone" title="Sign Up"/>

 }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
