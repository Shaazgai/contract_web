"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { GoogleIcon } from "@/components/icons";

export default function LoginPage() {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="flex">
      <button
        onClick={() => handleGoogleSignIn()}
        className="gap-3 flex  p-0 px-2 border-gray-200 rounded-lg"
      >
        <GoogleIcon size="1.2em" />
        Google хаягаар нэвтрэх
      </button>
    </div>
  );
}
