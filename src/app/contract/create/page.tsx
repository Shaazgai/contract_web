"use client";

import Image from "next/image";
import { useState } from "react";
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
import { PartyModel } from "@/models/contract.model";
import { PartyType } from "@/utils/enum";

import { createContract } from "@/app/(api)/contract";
import { useRouter } from "next/navigation";
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
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const create = async () => {
    setLoading(true);
    console.log(executerData, subscriberData);
    // await createContract().then((d) => {
    //   router.push("/contract/create/payment");
    // });
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
