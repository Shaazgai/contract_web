import { ContractModel, PartyModel } from "@/models/contract.model";
import React from "react";
import { ContractUserCard } from "./card";
import { Button, FileButton, Group, Loader } from "@mantine/core";

import { useAppContext } from "@/app/_context";
import { usePathname } from "next/navigation";
import {
  checkEmail,
  checkPhone,
  checkRegisterNumber,
  checkUsername,
} from "@/utils/functions";

export const ContractForm = ({
  subscriberData,
  executerData,
  setExecuterData,
  setSubsciberData,
  files,
  setFiles,
  data, 
  setData
}: {

  data: ContractModel, 
  setData: React.Dispatch<React.SetStateAction<ContractModel 
  >>
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  subscriberData: PartyModel;
  setSubsciberData: React.Dispatch<React.SetStateAction<PartyModel>>;
  executerData: PartyModel;
  setExecuterData: React.Dispatch<React.SetStateAction<PartyModel>>;
}) => {
  const { user } = useAppContext();
  const pathname = usePathname();

  return (
    <div className="flex w-full justify-around items-center bg-black text-primary pl-40 pr-40">
      <ContractUserCard
        url={user?.profileImg ?? "/img/media/instagram.jpg"}
        side="Захиалагч тал"
        approved={true}
        name={user?.username ?? "Нэр"}
      />
      <div className="border border-primary bg-black rounded-3xl w-full max-w-lg  p-4">
        <h1 className="text-white text-center font-semibold text-[24px]">
          Мэдээлэл бүртгүүлэх
        </h1>
        <div className="flex w-full justify-between gap-8">
          <InfoForm
            title="Захиалагч тал"
            data={subscriberData}
            setData={setSubsciberData}
          />
          <div className="mt-7 border-l-2 border-white h-[42vh]"></div>
          <InfoForm
            title="Гүйцэтгэгч тал"
            data={executerData}
            setData={setExecuterData}
          />
        </div>
        <div>
          <h1 className="text-center font-semibold pt-2 my-4">
            Төсөл эхлэх болон дуусах хугацаа
          </h1>
          <div className="flex gap-[70px]">
            <div>
              {" "}
              <span>Эхлэх өдөр</span>
              <input
              onChange={(e) => {
                setData((prev) => ({...prev, startDate: e.target.value}))
              }}
                type="date"
                className={`rounded-xl w-full h-[4vh] w-[190px] text-black ${data?.startDate ? 'border-transparent' : 'border-[1px] border-rose-600'} mt-2 mb-3 px-3`}
              />
            </div>
            <div>
              {" "}
              <span>Дуусах өдөр</span>
              <input
                 onChange={(e) => {
                  setData((prev) => ({...prev, endDate: e.target.value}))
                }}
                type="date"
                className={`rounded-xl w-full h-[4vh] w-[190px] text-black ${data?.endDate ? 'border-transparent' : 'border-[1px] border-rose-600'} mt-2 mb-3 px-3`}
              />
            </div>
          </div>
        </div>
        {/* <button className="border border-white w-full p-2 rounded-xl">add file</button> */}
        <div className="w-full border border-white rounded-xl p-2 mt-4">
          <Group justify="center">
            <FileButton
              onChange={setFiles}
              accept="image/png,image/jpeg"
              multiple
            >
              {(props) => (
                <Button
                  {...props}
                  className="flex w-full justify-center items-center"
                >
                  Add File Button
                </Button>
              )}
            </FileButton>
          </Group>

          <div
            className={`flex max-w-md w-full gap-2 mt-4 py-3 ${
              files.length > 0 ? "overflow-x-scroll" : "border-[1px] border-rose-600"
            }`}
          >
            {files.length > 0 ? (
              files.map((file, i) => {
                return (
                  <img
                  key={i}
                    src={`${URL.createObjectURL(file)}`}
                    className="w-12 h-12 object-cover rounded-xl"
                    alt=""
                  />
                );
              })
            ) : (
              <div className="h-12 w-full flex justify-center">
                <span>Хоосон</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <ContractUserCard
        url="/img/media/facebook.jpg"
        side="Гүйцэтгэх тал"
        approved={executerData.verified}
      />
    </div>
  );
};

export const InfoForm = ({
  title,
  data,
  setData,
}: {
  title: string;
  data: PartyModel;
  setData: React.Dispatch<React.SetStateAction<PartyModel>>;
}) => {
  return (
    <div className="pt-4">
      <h2 className="pr-5 pb-4 text-center text-[23px] font-semibold">
        {title}
      </h2>
      <div className="flex flex-col">
        <span>Овог нэр</span>
        <input
          type="text"
          className={`rounded-2xl h-[4vh] w-full text-black ${
            checkUsername(data.username)
              ? "border-transparent"
              : "border-[1px] border-rose-600"
          } mt-2 mb-2 px-3`}
          onChange={(e) =>
            setData((prev) => ({ ...prev, username: e.target.value }))
          }
        />
      </div>
      <div>
        <span>Регистр</span>
        <input
          type="text"
          className={`${
            checkRegisterNumber(data.registerNumber)
              ? "border-transparent"
              : "border-[1px] border-rose-600"
          } rounded-2xl h-[4vh] w-full text-black mt-2 mb-2 px-3`}
          onChange={(e) =>
            setData((prev) => ({ ...prev, registerNumber: e.target.value }))
          }
        />
      </div>
      <div>
        <span>И-мэйл</span>
        <input
          type="text"
          className={`rounded-2xl h-[4vh] w-full text-black ${
            checkEmail(data.email)
              ? "border-transparent"
              : "border-[1px] border-rose-600"
          } mt-2 mb-2 px-3`}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <div>
        <span>Утасны дугаар</span>
        <input
          type="text"
          className={`${
            checkPhone(data.phone)
              ? "border-transparent"
              : "border-[1px] border-rose-600"
          } rounded-2xl h-[4vh] w-full text-black  mt-2 mb-3 px-3`}
          onChange={(e) =>
            setData((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      </div>
    </div>
  );
};
