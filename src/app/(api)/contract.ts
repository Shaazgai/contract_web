"use server";
import { ContractModel } from "@/models/contract.model";
import { ContractType } from "@/utils/enum";
import { ErrorMessages } from "@/utils/string";
import { Api } from "@/utils/values";
import { cookies } from "next/headers";

export async function imageUploader(images: FormData): Promise<{
  file: string[];
} | null> {
  try {
    const token = cookies().get("token");

    let res = await fetch(`${Api.api}upload`, {
      method: "POST",
      headers: {
        cache: "no-store",
        Authorization: `Bearer ${token?.value ?? ""}`,
      },
      body: images,
    }).then((d) => d.json());

    return res;
  } catch (error) {
    console.log(error);
    throw new Error(ErrorMessages.occured);
  }
}

export async function createContract(type: ContractType) {
  try {
    const token = cookies().get("token");
    if (token) {
      const res = await fetch(`${Api.contract}`, {
        method: "POST",
        body: JSON.stringify({
          type: type,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value ?? ""}`,
        },
      }).then((d) => d.json());

      return res;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function additionContract(
  images: FormData,
  id: string,
  dto: ContractModel
) {
  try {
    const token = cookies().get("token");
    if (token) {
      let imagesRes = await imageUploader(images);

      const res = await fetch(`${Api.contract}${id}`, {
        method: "PUT",
        body: JSON.stringify({
          file: imagesRes?.file ?? [],
          startDate: dto.startDate,
          endDate: dto.endDate,
          files: dto.files,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value ?? ""}`,
        },
      });
      console.log(res);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function executer(id: string, mail: string) {
  try {
    const res = await fetch(`${Api.executer}${mail}/${id}`).then((d) =>
      d.json()
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function getContractById(id: string) {
  try {
    const token = cookies().get("token");
    const res = await fetch(`${Api.contractGet}${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value ?? ""}`,
      },
    }).then((d) => d.json());

    return res;
  } catch (error) {
    console.log(error);
  }
}
