'use server'
import { ErrorMessages } from "@/utils/string";
import { Api } from "@/utils/values";
import { cookies } from "next/headers";

export async function sendInvite(body: string[], id: string) {
  try {
    const cookie = cookies();
    let token = cookie.get("token");
    if (token?.value != "" && token) {
      let res = await fetch(`${Api.send}`, {
        method: "POST",
        body: JSON.stringify({
          recipients: body,
          id: id
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value ?? ""}`,
        },
      })
        .then((d) => d.json())
        .catch((e) => {
          return null;
        });
   

      return res;
    }

    return null;
  } catch (error) {
    console.error(error);

    throw new Error(ErrorMessages.occured);
  }
}
