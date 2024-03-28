"use server";
import { UserModel } from "@/models/user.schema";
import { ErrorMessages } from "@/utils/string";
import { Api } from "@/utils/values";
import { cookies } from "next/headers";

export async function createContract() {
  try {
    await fetch(`${Api.user}`, {});
  } catch (error) {}
}

export const loginUser = async (
  email: string,
  profileImg: string,
  name: string
) => {
  const token = cookies().get("token");

 
    try {
      const res = await fetch(`${Api.auth}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          profileImg: profileImg,
          name: name,
        }),
      }).then((d) => d.json());
      console.log(res);
      if (res) {
        cookies().delete("next-auth.session-token");
        cookies().delete("next-auth.csrf-token");
        cookies().delete("next-auth.callback-url");
        cookies().set("token", res.token);
      }

      return res;
      // if (!data) {
      //   window.location.pathname = '/account/check';
      // }
    } catch (err) {
      console.error(err);
    }
  
};

export async function getUser(): Promise<UserModel | null> {
  try {
    const cookie = cookies();
    let token = cookie.get("token");
    let hasCurrent = cookie.has("current");
    let hasType = cookie.has("type");
    if (token?.value != "" && token) {
      let res = await fetch(`${Api.userMe}`, {
        headers: {
          Authorization: `Bearer ${token?.value ?? ""}`,
        },
      })
        .then((d) => d.json())
        .catch((e) => {
          cookies().set("token", "");
          return null;
        });
      if (!hasCurrent) cookie.set("current", res._id);
      if (!hasType) cookie.set("type", res.userType);

      return res;
    }
    cookies().set("token", "");
    return null;
  } catch (error) {
    console.error(error);
    cookies().set("token", "");
    throw new Error(ErrorMessages.occured);
  }
}
