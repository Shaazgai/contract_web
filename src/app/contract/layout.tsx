"use client";
import { ReactNode, useEffect } from "react";
import { useAppContext } from "../_context";
import { getUser } from "../(api)/user";

export default function ContractLayout({ children }: { children: ReactNode }) {
  const { user, setUser } = useAppContext();
  const getUsers = async () => {
    await getUser().then((d) => {
      setUser(d);
    });
  };
  useEffect(() => {
    if (user == null) {
      getUsers();
    }
  }, [user]);
  return (
    <div className="flex justify-between bg-black">
      <p>sidebar</p>

      <div className="w-full flex justify-center">
        <div className="w-full">{children}</div>
        <p>navbar</p>
      </div>
    </div>
  );
}
