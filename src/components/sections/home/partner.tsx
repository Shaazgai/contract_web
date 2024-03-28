import Link from 'next/link';
import Image from 'next/image';
import { SimpleGrid, Container } from '@mantine/core';

export default function Partner() {
  return (
    <>
      <div>
        <Container size={'xl'}>
          <SimpleGrid
            cols={{ base: 2, sm: 3, lg: 7 }}
            className="flex justify-around bg-black pt-16 pb-16"
          >
            <div>
              <Link href="#">
                <Image
                  src="/img/first/white_logo.png"
                  alt="Main Logo"
                  width={120}
                  height={20}
                  className=""
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src="/img/first/white_logo.png"
                  alt="Main Logo"
                  width={120}
                  height={20}
                  className=""
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src="/img/first/white_logo.png"
                  alt="Main Logo"
                  width={120}
                  height={20}
                  className=""
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src="/img/first/white_logo.png"
                  alt="Main Logo"
                  width={120}
                  height={20}
                  className=""
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src="/img/first/white_logo.png"
                  alt="Main Logo"
                  width={120}
                  height={20}
                  className=""
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src="/img/first/white_logo.png"
                  alt="Main Logo"
                  width={120}
                  height={20}
                  className=""
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src="/img/first/white_logo.png"
                  alt="Main Logo"
                  width={120}
                  height={20}
                  className=""
                />
              </Link>
            </div>
          </SimpleGrid>
        </Container>
        <div className="w-full h-px bg-gradient-to-r from-yellow-100 to-yellow-500 opacity-55"></div>
      </div>
    </>
  );
}
