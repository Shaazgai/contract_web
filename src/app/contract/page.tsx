"use client";
import Link from "next/link";
import { useAppContext } from "../_context";
import { contracts } from "@/utils/values";
import { useRouter } from "next/navigation";
import { createContract } from "../(api)/contract";
import { ContractType } from "@/utils/enum";

export default function ContractPage() {
  const { user } = useAppContext();
  const router = useRouter();
  const create = async (type: ContractType) => {
    await createContract(type).then((d) => {
      router.push("/contract/create/" + d._id);
    });
  };
  return (
    <div className="flex flex-col justify-around items-start h-screen bg-black w-full text-white max-w-5xl w-full ">
      <div>
        <h1 className="font-bold text-[50px] bg-gradient-to-r from-primary to-danger text-transparent bg-clip-text">
          Hello, {user?.username!}
        </h1>
        <h1 className="font-semibold text-[50px]">How can I help you today?</h1>
      </div>
      <div className="flex gap-8 justify-around text-white w-full ">
        {contracts.map((c, i) => (
          <button
            className="flex-1 border flex justify-center items-center border-transparent bg-[#1e1f20] pl-3 pr-3  h-[24vh] rounded-2xl"
            key={i}
            onClick={() => create(c.value)}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
