import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Favorites from "./Components/Favorites/Favorites";
import MainPage from "./Components/MainPage/MainPage";
import MyRecipes from "./Components/MyRecipes/MyRecipes";
import LoginSignUpWrapper from "./Pages/LoginPage/LoginSignUpWrapper";
import SignUp from "./Pages/LoginPage/SignUp/SignUp";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/my-recipes",
        element: <MyRecipes />,
      },
    ],
  },
  {
    path: "/new",
    element: <LoginSignUpWrapper />,
    children: [
      {
        path: "/new/login",
        element: (
          <LoginPage
            buttonText="Login"
            loginWithGoogleText="Log in with Google"
            title="Welcome"
          />
        ),
      },
      {
        path: "/new/sign-up",
        element: (
          <SignUp
            buttonText="Sign Up"
            loginWithGoogleText="Register with Google"
            displayNone="displayNone"
            title="Sign Up"
          />
        ),
      },
    ],
  },
  // {
  //   path: "newUser/login",
  //   element: (
  //     <LoginPage
  //       buttonText="Login"
  //       loginWithGoogleText="Log in with Google"
  //       title="Welcome"
  //       input={input}
  //       setInput={setInput}
  //       onSubmit={onSubmitHandlerLogin}
  //     />
  //   ),
  // },
  // {
  //   path: "/register",
  //   element: (
  //     <LoginPage
  //       buttonText="Sign Up"
  //       loginWithGoogleText="Register with Google"
  //       displayNone="displayNone"
  //       title="Sign Up"
  //       input={input}
  //       setInput={setInput}
  //       onSubmit={onSubmitHandlerRegister}
  //     />
  //   ),
  //dddddd },
]);

createRoot(document.getElementById("root")).render(
 
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

);
