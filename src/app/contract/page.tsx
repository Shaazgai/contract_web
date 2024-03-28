import Link from "next/link";

export default function ContractPage() {
  return (
    <div className="flex flex-col justify-around items-start h-screen bg-black w-full text-white max-w-5xl w-full ">
      <div>
        <h1 className="font-bold text-[50px] bg-gradient-to-r from-primary to-danger text-transparent bg-clip-text">
          Hello, User!
        </h1>
        <h1 className="font-semibold text-[50px]">How can I help you today?</h1>
      </div>
      <div className="flex gap-8 justify-around text-white w-full ">
        <button className="flex-1 border border-transparent bg-[#1e1f20] pl-3 pr-3  h-[24vh] rounded-2xl">
          Хамтран ажиллах гэрээ
        </button>
        <button className="flex-1 border border-transparent bg-[#1e1f20]  h-[24vh] rounded-2xl">
          Гэрээт гэрээ
        </button>
        <button className="flex-1 border border-transparent bg-[#1e1f20] pl-3 pr-3  h-[24vh] rounded-2xl">
          Ажил гүйцэтгэлийн гэрээ
        </button>
        <button className="flex-1 border border-transparent bg-[#1e1f20] pl-3 pr-3  h-[24vh] rounded-2xl">
          Урт хугацааны гэрээ
        </button>
      </div>

      <Link
        href={"/contract/create"}
        className="w-full h-[8vh] flex justify-center items-center rounded-2xl border border-transparent bg-[#1e1f20]"
      >
        Шинээр гэрээний төрөл үүсгэх
      </Link>
    </div>
  );
}
