import Image from "next/image";

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
              placeholder="  example@email.com"
            />
            <button className="border border-green-400 text-teal-300 pl-5 pr-5 pt-2 pb-2 rounded-xl">
              invite
            </button>
          </>
        )}
      </div>
    </>
  );
};
