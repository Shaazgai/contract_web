import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mantine/core';

export const PublicHeader = () => {
  return (
    <>
      <header className="bg-transparent border border-transparent border-b h-[12vh]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-3">
          <div className="flex lg:flex-1">
            <Link href="#">
              <Image
                src="/img/first/main_logo.png"
                alt="Main Logo"
                width="100"
                height="4"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-md font-normal leading-6 text-gray-900 hover:border-transparent hover:bg-primary pl-5 pr-5 pt-3 pb-3 rounded-3xl"
                aria-expanded="false"
              >
                Partners
                <svg
                  className="h-5 w-5 flex-none text-black hover:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute -left-12 z-10 w-screen max-w-60 overflow-hidden rounded-3xl bg-black shadow-lg ring-gray-900/5">
                <div className="p-3 hidden">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-900 hover:rounded-3xl">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-white">
                        Partner with Hover
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-900 hover:rounded-3xl">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-white">
                        Refer a friend
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-md font-normal leading-6 text-gray-900 hover:border-transparent hover:bg-primary pl-5 pr-5 pt-3 pb-3 rounded-3xl"
                aria-expanded="false"
              >
                Resources
                <svg
                  className="h-5 w-5 flex-none text-black hover:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute -left-12 top-full z-10 w-screen max-w-60 overflow-hidden rounded-3xl bg-black shadow-lg ring-gray-900/5">
                <div className="p-3 hidden">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-900 hover:rounded-3xl">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-white">
                        Customers
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-900 hover:rounded-3xl">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-white">
                        Blog
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-900 hover:rounded-3xl">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-white">
                        Community
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-md font-normal leading-6 text-gray-900 hover:border-transparent hover:bg-primary pl-5 pr-5 pt-3 pb-3 rounded-3xl"
                aria-expanded="false"
              >
                Company
                <svg
                  className="h-5 w-5 flex-none text-black hover:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute -left-12 top-full mt-4 z-10 w-screen max-w-60 overflow-hidden rounded-3xl bg-black  ring-gray-900/5">
                <div className="p-3 hidden">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-900 hover:rounded-3xl">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-white">
                        About us
                      </a>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-900 hover:rounded-3xl">
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-white">
                        Careers
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <button className="border border-transparent pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:rounded-br-none hover:duration-300 bg-black text-primary">
                Book a Demo
              </button> */}
              <Button
                variant="gradient"
                gradient={{
                  from: 'rgba(61, 48, 48, 1)',
                  to: 'rgba(26, 5, 5, 1)',
                  deg: 90,
                }}
                className="border border-transparent pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:rounded-br-none hover:duration-300 bg-black text-primary"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
