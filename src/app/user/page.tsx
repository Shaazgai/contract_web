"use client";

import { useSearchParams } from "next/navigation";

export default function UserPage() {
  const params = useSearchParams();
  return <>{params.get("user")}</>;
}
