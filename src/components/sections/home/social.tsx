import Link from 'next/link';
import Image from 'next/image';
import { IconStarFilled, IconMessages, IconSend2 } from '@tabler/icons-react';

export default function Soicial() {
  return (
    <>
      <section className="bg-black h-screen text-white flex justify-around items-center p-20 w-full">
        <div className="w-[45%] pt-10">
          <button className="flex items-center border border-gray-600 pt-3 pb-3 pl-5 pr-5 rounded-full">
            <p className="bg-primarySecond w-[14px] h-[14px] rounded-full"></p>{' '}
            <p className="ml-3 text-gray-400">It feels real because it is.</p>
          </button>
          <h2 className="font-semibold text-[54.08px]">
            The closest thing to your star customer service agent
          </h2>
          <div className="flex items-center pt-7">
            <span>
              <IconStarFilled className="text-slate-300 w-1.8 h-1.8" />
            </span>
            <p className="pl-4">Human empathy in every interaction</p>{' '}
          </div>
          <div className="flex items-center pt-7">
            <span>
              <IconStarFilled className="text-slate-300 w-1.8 h-1.8" />
            </span>
            <p className="pl-4">Resolves issues instead of deflecting them</p>{' '}
          </div>
          <div className="flex items-center pt-7">
            <span>
              <IconStarFilled className="text-slate-300 w-1.8 h-1.8" />
            </span>
            <p className="pl-4">Effortless omnichannel management</p>{' '}
          </div>
          <div className="pt-12">
            <button className="border border-transparent pl-8 pr-8 pt-5 pb-5 rounded-3xl hover:rounded-br-none hover:duration-300 bg-primarySecond text-black">
              Book a demo
            </button>
          </div>
        </div>
        <div className="w-[40%] border border-gray-800 h-[80vh] rounded-3xl bg-[#0c0c0b]">
          <div className="h-[11vh] flex p-5 border-b border-b-gray-500">
            <div className="border border-yellow-400 pt-2.5 pb-2.5 pr-2.5 pl-2.5 rounded-xl">
              <span>🤓</span>
            </div>
            <div className="pl-4">
              {' '}
              <p className="text-[#c6bca9]">Sami</p>{' '}
              <p className="text-[#766f5f] flex">
                Social media Gal <IconMessages stroke={1.75} className="pl-2"/>
              </p>
            </div>
          </div>
          <div className="p-7 border border-gray-800 h-[58vh]">
            <div className="flex">
              <div className="">
                <Image
                  src="/img/first/noorog.png"
                  alt="Noorog Logo"
                  width={40}
                  height={40}
                  className="pt-12"
                />
              </div>
              <div className="w-[334px] h-[81px] border border-gray-800 bg-[#2e2c14] rounded-xl rounded-bl-none ml-3 p-[12px]">
                I want a replacement for my bag and a refund on the boots.
              </div>
            </div>
            <div className="flex mt-7">
              <div className="w-[334px] h-[111px] border-none bg-gradient-to-tr from-rgba-green-600 to-rgba-pink-100 rounded-2xl rounded-br-none p-[12px]">
                Hey Nora 👋 I got you! Do you want the same color for the bag? I
                can also exchange the boots. What do you think? 😊
              </div>
              <div className="pt-16 pl-4">
                <div className="border border-yellow-400 pt-2.5 pb-2.5 pr-2.5 pl-2.5 rounded-xl">
                  <span>🤓</span>
                </div>
              </div>
            </div>
            <div className="flex mt-8">
              <div className="">
                <Image
                  src="/img/first/noorog.png"
                  alt="Noorog Logo"
                  width={40}
                  height={40}
                  className="pt-14"
                />
              </div>
              <div className="w-[334px] h-[91px] border border-gray-800 bg-[#2d2a14] rounded-xl rounded-bl-none ml-3 p-[12px]">
                I wil have just the bag replaced as it arrived scratched. I will
                return the boots for a refund.
              </div>
            </div>
          </div>
          <div className="flex justify-between text-white pt-7 pl-10 pr-10">
            <span>Type a reply...</span>
            <IconSend2 stroke={2}  className="cursor-pointer"/>
          </div>
        </div>
      </section>
    </>
  );
}
