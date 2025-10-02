import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Suspense, useEffect } from "react";
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectorAuth";
import { refreshUserThunk } from "./redux/auth/operationsAuth";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            {/* <Route path="/" element={<Loader />}></Route> */}
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={<RestrictedRoute component={<Login />} redirectTo="/" />}
            ></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute component={<Register />} redirectTo="/" />
              }
            ></Route>
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
