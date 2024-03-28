import { sendInvite } from "@/app/(api)/mail";
import { checkEmail } from "@/utils/functions";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const ContractUserCard = ({
  url,
  side,
  name,
  approved,
}: {
  url: string;
  side: string;
  name?: string;
  approved: boolean;
}) => {
  const [email, setEmail] = useState("");
  const pathname = usePathname();
  const invite = async () => {

    const path = pathname.split('/')
    checkEmail(email)
      ? await sendInvite([email], path[path.length-1]).then((d) => {
          console.log(d);
          // toast({
          //   title: 'Амжилттай'
          // })
        })
      : {
          // toast({
          //   title: 'Буруу байна'
          // })
        };
  };

  return (
    <>
      <div className="max-w-40 w-full flex flex-col items-center">
        <Image
          src={url}
          alt="Main Logo"
          width="110"
          height="10"
          className="rounded-full"
        />
        <h1 className="text-center font-semibold pt-3">{side}</h1>

        {approved ? (
          <>
            <h1 className="text-center font-extrabold pt-3 pb-7">{name}</h1>
            <button className="border border-green-400 text-teal-300 pl-5 pr-5 pt-2 pb-2 rounded-xl">
              Approved
            </button>
          </>
        ) : (
          <>
            <input
              className="border border-green-400 text-teal-300 pl-5 pr-5 pt-2 pb-2 rounded-xl mt-7 mb-7"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="  example@email.com"
            />
            <button
              onClick={invite}
              className="border border-green-400 text-teal-300 pl-5 pr-5 pt-2 pb-2 rounded-xl"
            >
              Урих
            </button>
          </>
        )}
      </div>
    </>
  );
};
