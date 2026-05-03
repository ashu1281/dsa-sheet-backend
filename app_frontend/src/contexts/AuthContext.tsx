import {
  useState,
} from "react";

import {
  AuthContext,
} from "./auth.context";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [user, setUser] =
    useState<User | null>(
      null
    );

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};