'use client';

import { Tabs, Image } from '@mantine/core';
// import Image from 'next/image';

export default function Comment() {
  return (
    <>
      <section className="h-[140vh] mt-auto pt-10">
        <button className="flex justify-center items-center border border-[#eeeeee] pt-3 pb-3 pl-5 pr-5 rounded-full m-auto">
          <p className="bg-[#343434] w-[14px] h-[14px] rounded-full"></p>{' '}
          <p className="ml-3 text-black">The world most human-like AI.</p>
        </button>
        <h2 className="font-semibold text-[54.08px] m-auto text-center">
            People are talking
          </h2>
        <Tabs defaultValue="gallery">
          <Tabs.List className="flex justify-around pt-3 pb-10 pl-36 pr-36">
            <Tabs.Tab value="logo_1">
              <Image
                src="/img/first/main_logo.png"
                alt="Main Logo"
                width={120}
                height={20}
                className="pt-5 hover:scale-110 opacity-100"
              />
            </Tabs.Tab>
            <Tabs.Tab value="logo_2">
              <Image
                src="/img/first/main_logo.png"
                alt="Main Logo"
                width={120}
                height={20}
                className="pt-5 hover:scale-110 opacity-55 hover:opacity-100"
              />
            </Tabs.Tab>
            <Tabs.Tab value="logo_3">
              <Image
                src="/img/first/main_logo.png"
                alt="Main Logo"
                width={120}
                height={20}
                className="pt-5 hover:scale-110 opacity-55 hover:opacity-100"
              />
            </Tabs.Tab>
            <Tabs.Tab value="logo_4">
              <Image
                src="/img/first/main_logo.png"
                alt="Main Logo"
                width={120}
                height={20}
                className="pt-5 hover:scale-110 opacity-55 hover:opacity-100"
              />
            </Tabs.Tab>
            <Tabs.Tab value="logo_5">
              <Image
                src="/img/first/main_logo.png"
                alt="Main Logo"
                width={120}
                height={20}
                className="pt-5 hover:scale-110 opacity-55 hover:opacity-100"
              />
            </Tabs.Tab>
            <Tabs.Tab value="logo_6">
              <Image
                src="/img/first/main_logo.png"
                alt="Main Logo"
                width={120}
                height={20}
                className="pt-5 hover:scale-110 opacity-55 hover:opacity-100"
              />
            </Tabs.Tab>
            <Tabs.Tab value="logo_7">
              <Image
                src="/img/first/main_logo.png"
                alt="Main Logo"
                width={120}
                height={20}
                className="pt-5 hover:scale-110 opacity-55 hover:opacity-100"
              />
            </Tabs.Tab>
          </Tabs.List>

          <div className="pl-20 pr-20">
            <Tabs.Panel value="logo_1" className="flex justify-around w-[100%]">
              <div className="w-[35%] flex flex-col justify-center">
                <h1 className="text-[48px] font-semibold">
                  We just finished our busiest season of the year.
                </h1>
                <p className="font-[16px] pt-3 pb-3">
                  I feel like since we had Siena, it really truly saved us so
                  much time and headache. Without Siena, we would have been
                  drowning in the amount of incoming tickets.
                </p>
                <span className="flex font-semibold">
                  <h3 className="pr-3"> Katie Mitchell </h3>
                  <h2 className="border-l-2 border-l-[#545454] pr-3 pl-3 text-[#545454]">
                    @shopsimplemodern
                  </h2>
                </span>
              </div>
              <div className="w-[50%] pl-20">
                <Image
                  src="/img/comment/img_1.jpg"
                  alt="Main Logo"
                  width={500}
                  height={80}
                  className="pt-5 rounded-3xl"
                />
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="logo_2" className="flex justify-around w-[100%]">
              <div className="w-[35%] flex flex-col justify-center">
                <h1 className="text-[48px] font-semibold">
                  Happy customers. People are talking Best tool for...
                </h1>
                <p className="font-[16px] pt-3 pb-3">
                  I feel like since we had Siena, it really truly saved us so
                  much time and headache. Without Siena, we would have been
                  drowning in the amount of incoming tickets.
                </p>
                <span className="flex font-semibold">
                  <h3 className="pr-3"> Katie Mitchell </h3>
                  <h2 className="border-l-2 border-l-[#545454] pr-3 pl-3 text-[#545454]">
                    @shopsimplemodern
                  </h2>
                </span>
              </div>
              <div className="w-[50%] pl-20">
                <Image
                  src="/img/comment/img_1.jpg"
                  alt="Main Logo"
                  width={500}
                  height={80}
                  className="pt-5 rounded-3xl"
                />
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="logo_3">Settings tab content</Tabs.Panel>
            <Tabs.Panel value="logo_4">Gallery tab content</Tabs.Panel>

            <Tabs.Panel value="logo_5">Messages tab content</Tabs.Panel>

            <Tabs.Panel value="logo_6">Settings tab content</Tabs.Panel>
            <Tabs.Panel value="logo_7">Settings tab content</Tabs.Panel>
          </div>
        </Tabs>
      </section>
    </>
  );
}
