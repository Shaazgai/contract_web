'use client';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@mantine/core';

export default function About() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-start items-center border border-gray-700 pt-20">
        <h1 className="text-[75.2px] text-center font-semibold">
          The #1 Empathic AI CX agent that <br />
          {/* <canvas width="964" height="1572"></canvas> */}
          <AboutTyping />
        </h1>
        <p className="text-[22px] font-normal text-center w-[900px] pt-10 pb-10">
          The autonomous customer service platform designed for commerce.
          Combine the best of human empathy and AI to transform your customer
          experience.
        </p>
        <div>
          <Button className="border border-transparent pl-6 pr-6 pt-4 pb-4 rounded-full hover:rounded-br-none hover:duration-300 bg-black text-primary">
            Book a Demo
          </Button>
        </div>
      </div>
    </>
  );
}

function AboutTyping() {
  return (
    <TypeAnimation
      sequence={[
        'amplifies lotalty',
        1000,
        'mirrors your brand',
        1000,
        'elevates care',
        1000,
        'has your back 24/7',
        1000,
        'makes customer smile',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  );
}

  