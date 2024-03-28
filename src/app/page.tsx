"use client";
import About from "@/components/sections/home/about";
import PublicLayout from "@/layouts/public-layout";
import Partner from "@/components/sections/home/partner";
import Social from "@/components/sections/home/social";
import Scroll from "@/components/sections/home/scroll";
import Media from "@/components/sections/home/media";
import Work from "@/components/sections/home/work";
import Comment from "@/components/sections/home/comment";
import Customer from "@/components/sections/home/customer";
import { useSession } from "next-auth/react";
import { getUser, loginUser } from "./(api)/user";
import { useAppContext } from "./_context";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAppContext();
  const { data: session, status } = useSession();
  const login = async () => {
    console.log('call');
    const res = await loginUser(
      session!.user!.email!,
      session!.user!.image!,
      session!.user!.name!
    );
    console.log(res);
    res ? setUser(undefined) : getUserData();
  };
  const getUserData = async () => {
    setLoading(true);
    await getUser()
      .then((d) => {
        if (d != null) {
          
          setUser(d);
        }
      })
      .catch(() => {
        setUser(undefined);
      });
    setLoading(false);
  };
  useEffect(() => {
   
    if (
      !user &&
      session &&
      session?.user?.email &&
      session?.user?.image &&
      session?.user?.name
    ) {
      login();
    }
    if (!user) {
      getUserData();
    }
  }, [session]);
  return (
    <main>
      <PublicLayout>
        <About />
        <Partner />
        <Social />
        <Scroll />
        <Media />
        <Work />
        <Comment />
        <Customer />
      </PublicLayout>
    </main>
  );
}
