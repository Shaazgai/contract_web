import Link from 'next/link';
import Image from 'next/image';

export default function Customer() {
  return (
    <>
      <section className="h-screen bg-black flex flex-col justify-center">
        <h1 className="font-semibold text-[75px] text-primary text-center">
          Take your customer <br /> experience to new heights{' '}
        </h1>
        <div className="pt-12 text-center">
          <button className="border border-transparent pl-10 pr-10 pt-4 pb-4 rounded-full hover:rounded-br-none hover:duration-300 bg-primarySecond text-black">
            Book a demo
          </button>
        </div>
      <div className="bg-gradient-to-b from-black to-rgba-gray-300 h-[16rem] relative top-auto bottom-0 left-0 right-0"></div>
      </section>
    </>
  );
}
