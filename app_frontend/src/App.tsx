import {
  useContext,
  useEffect,
  useState,
} from "react";

import AppRoutes from "./routes/AppRoutes";

import { AuthContext } from "./contexts/auth.context";

import { getMe } from "./services/auth.service";

function App() {

  const { setUser } =
    useContext(AuthContext);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const initializeAuth =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

          if (!token) {
            return;
          }

          const response =
            await getMe();

          setUser(
            response.data
          );

        } catch (error) {

          localStorage.removeItem(
            "token"
          );

          console.error(error);

        } finally {

          setLoading(false);
        }
      };

    initializeAuth();

  }, [setUser]);

  if (loading) {
    return null;
  }

  return <AppRoutes />;
}

export default App;