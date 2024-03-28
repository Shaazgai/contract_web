'use server'
import { Api } from "@/utils/values";
import { cookies } from "next/headers";

export async function createContract() {
  try {
    const token = cookies().get("token");
    if (token) {
      await fetch(`${Api.contract}`, {
        method: "POST",
        headers: {
          Authorzation: `Bearer ${token.value}`,
        },
      });
    }
  } catch (error) {}
}
