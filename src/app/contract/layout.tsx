import { ReactNode } from "react";

export default function ContractLayout({ children }: { children: ReactNode }) {
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
