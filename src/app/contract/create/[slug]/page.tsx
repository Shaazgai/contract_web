"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FileButton,
  Button,
  Group,
  Text,
  Modal,
  Dialog,
  TextInput,
} from "@mantine/core";
import { ContractForm, InfoForm } from "@/components/sections/form";
import { ContractModel, PartyModel } from "@/models/contract.model";
import { ContractStatus, PartyType } from "@/utils/enum";

import {
  additionContract,
  createContract,
  executer,
  getContractById,
} from "@/app/(api)/contract";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ContractUserCard } from "@/components/sections/card";
import {
  checkEmail,
  checkPhone,
  checkRegisterNumber,
  checkUsername,
} from "@/utils/functions";

export default function CreateContractPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [subscriberData, setSubsciberData] = useState<PartyModel>({
    username: "",
    phone: "",
    email: "",
    registerNumber: "",
    verified: true,
    type: PartyType.subscriber,
  });
  const [executerData, setExecuterData] = useState<PartyModel>({
    username: "",
    phone: "",
    email: "",
    registerNumber: "",
    verified: false,
    type: PartyType.executer,
  });
  const [contract, setContract] = useState<ContractModel>({
    endDate: undefined,
    startDate: undefined,
    files: [],
    verified: false,
    status: ContractStatus.pending,
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const executeUser = async () => {
    const path = pathname.split("/");

    await executer(path[path.length - 1], params.get("user") ?? "");
  };
  const getContract = async (id: string) => {
    await getContractById(id).then((d) => {
      setContract(d);

      if (d?.files.length > 1) {
        setExecuterData((prev) => ({
          ...prev,
          verified: true,
        }));
      }
    });
  };
  useEffect(() => {
    if (params.get("user")) {
      executeUser();
    }
  }, [params]);
  useEffect(() => {
    const path = pathname.split("/");
    getContract(path[path.length - 1]);
  }, [pathname]);
  const create = async () => {
    setLoading(true);
    let fImages = new FormData();
    files?.map((prev, i) => {
      fImages.append(`files`, prev);
    });
    const path = pathname.split("/");
    await additionContract(fImages, contract._id ?? path[path.length - 1], {
      endDate: contract.endDate,
      startDate: contract.startDate,
      files: [subscriberData, executerData],
      verified: false,
      status: ContractStatus.pending,
    }).then((d) => {
      
      router.push("/contract/create/payment");
    });
    setLoading(false);
  };

  const disabled = (): boolean => {
    return (
      files.length > 0 &&
      checkEmail(executerData.email) &&
      checkEmail(subscriberData.email) &&
      checkPhone(executerData.phone) &&
      checkPhone(subscriberData.phone) &&
      checkRegisterNumber(executerData.registerNumber) &&
      checkRegisterNumber(subscriberData.registerNumber) &&
      checkUsername(executerData.username) &&
      checkUsername(subscriberData.username)
    );
  };
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div></div>
        <ContractForm
          data={contract}
          setData={setContract}
          executerData={executerData}
          files={files}
          setExecuterData={setExecuterData}
          setFiles={setFiles}
          setSubsciberData={setSubsciberData}
          subscriberData={subscriberData}
        />
        <button
          className="text-[28px] mt-10 text-white  py-2 w-full max-w-5xl rounded-2xl border border-transparent bg-[#1e1f20]"
          onClick={() => {
            create();
          }}
          disabled={!disabled()}
        >
          Гэрээг батлах
        </button>
      </section>
    </>
  );
}
