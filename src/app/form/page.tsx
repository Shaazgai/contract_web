'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

const Form = () => {
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <section className="overflow-hidden">
        <div className="flex justify-around items-center bg-[#0c0c0c] h-screen text-primary pl-40 pr-40">
          <div>
            <Image
              src="/img/media/instagram.jpg"
              alt="Main Logo"
              width="110"
              height="10"
              className="rounded-full"
            />
            <h1 className="text-center font-semibold pt-3">Захиалагч тал</h1>
            <h1 className="text-center font-extrabold pt-3 pb-7">Your name</h1>
            <button className="border border-green-400 text-teal-300 pl-5 pr-5 pt-2 pb-2 rounded-xl">
              Approved
            </button>
          </div>
          <div className="border border-[#1b1b1b] bg-[#0c0c0c] rounded-3xl w-[450px] h-[85vh] p-4">
            <h1 className="text-white text-center font-semibold text-[24px]">
              Мэдээлэл бүртгүүлэх
            </h1>
            <div className="flex w-full">
              <div className="pt-4">
                <h2 className="pr-5 pb-4 text-center text-[23px] font-semibold">
                  Захиалагч тал
                </h2>
                <span>Овог нэр</span>
                <input
                  type="text"
                  className="rounded-2xl h-[4vh] w-[190px] p-2 outline-none bg-[#161616] text-[#727272] border-transparent mt-2 mb-2"
                />
                <span>Регистр</span>
                <input
                  type="text"
                  className="rounded-2xl h-[4vh] w-[190px] p-2 outline-none bg-[#161616] text-[#727272] border-transparent mt-2 mb-2"
                />
                <span>И-мэйл</span>
                <input
                  type="email"
                  className="rounded-2xl h-[4vh] w-[190px] p-2 outline-none bg-[#161616] text-[#727272] border-transparen mt-2 mb-2 peer..."
                />
             
                <span>Утасны дугаар</span>
                <input
                  type="tel"
                  className="rounded-2xl h-[4vh] w-[190px] p-2 outline-none bg-[#161616] text-[#727272] border-transparent mt-2 mb-3"
                />
              </div>
              <div className="mt-7 border-l-2 border-white h-[42vh]"></div>
              <div className="pt-4 pl-4">
                <h2 className="pr-5 pb-4 text-center text-[23px] font-semibold">
                  Гүйцэтгэгч тал
                </h2>
                <span>Овог нэр</span>
                <input
                  type="text"
                  className="rounded-2xl h-[4vh] w-[190px] p-2 outline-none bg-[#161616] text-[#727272] border-transparent mt-2 mb-2"
                />
                <span>Регистр</span>
                <input
                  type="text"
                  className="rounded-2xl h-[4vh] w-[190px] p-2 outline-none bg-[#161616] text-[#727272] border-transparent mt-2 mb-2"
                />
                <span>И-мэйл</span>
                <input
                  type="text"
                  className="rounded-2xl h-[4vh] w-[190px] p-2 outline-none bg-[#161616] text-[#727272] border-transparen mt-2 mb-2"
                />
                <span>Утасны дугаар</span>
                <input
                  type="text"
                  className="rounded-2xl h-[4vh] w-[190px] p-2 outline-none bg-[#161616] text-[#727272] border-transparent mt-2 mb-3"
                />
              </div>
            </div>
            <div>
              <h1 className="text-center font-semibold pt-2">
                Төсөл эхлэх болон дуусах хугацаа
              </h1>
              <div className="flex">
                <div>
                  {' '}
                  <span>Эхлэх өдөр</span>
                  <input
                    type="date"
                    className="rounded-xl h-[4vh] w-[190px] pl-2 pr-2 outline-none bg-[#161616] text-[#727272] border-transparent mt-2 mb-3"
                  />
                </div>
                <div>
                  {' '}
                  <span>Дуусах өдөр</span>
                  <input
                    type="date"
                    className="rounded-xl h-[4vh] w-[190px] pl-2 pr-2   outline-none bg-[#161616] text-[#727272] border-transparent mt-2 mb-3"
                  />
                </div>
              </div>
            </div>
            {/* <button className="border border-white w-full p-2 rounded-xl">add file</button> */}
            <div className="w-full border border-white rounded-xl p-2 mt-4">
              <Group justify="center">
                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                  {(props) => (
                    <Button {...props} className="w-full">
                      Add file button
                    </Button>
                  )}
                </FileButton>
              </Group>

              {file && (
                <Text size="sm" ta="center" mt="sm">
                  Picked file: {file.name}
                </Text>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/img/media/facebook.jpg"
              alt="Main Logo"
              width="110"
              height="10"
              className="rounded-full"
            />
            <button className="border border-green-400 text-teal-300 pl-5 pr-5 pt-2 pb-2 rounded-xl mt-7 mb-7">
              example@email.com
            </button>
            <button className="border border-green-400 text-teal-300 pl-5 pr-5 pt-2 pb-2 rounded-xl">
              invite
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Form;
