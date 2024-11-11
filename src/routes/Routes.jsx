import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Error from "../components/Error";
import SignUp from "../components/SignUp";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
          path: "/signUp",
          element: <SignUp></SignUp>,
      },
    ],
    
  },
  
],
  {
future: {
v7_fetcherPersist: true,
v7_relativeSplatPath: true,
v7_normalizeFormMethod: true,
v7_partialHydration: true,
v7_skipActionErrorRevalidation: true,
v7_startTransition: true,
},
}

);

export default router;