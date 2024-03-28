"use client";

import { UserModel } from "@/models/user.schema";
import { ReactNode, createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: ReactNode }) {
  let [user, setUser] = useState<UserModel | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
