import Link from 'next/link';
import Image from 'next/image';

export default function Media() {
  return (
    <>
      <section className="pt-36">
        <div className="text-center">
          <button className="flex justify-center items-center border border-gray-600 pt-3 pb-3 pl-5 pr-5 rounded-full m-auto">
            <p className="bg-black w-[14px] h-[14px] rounded-full"></p>{' '}
            <p className="ml-3 text-black">The world most human-like AI.</p>
          </button>
          <h2 className="font-semibold text-[54.08px]">
            One platform, infinite possibilities
          </h2>
        </div>
        <div className="flex justify-around w-full h-[45vh] pt-24 pl-52 pr-52">
          <div>
            <Link href="#">
              <Image
                src="/img/media/whatsApp.jpg"
                alt="Main Logo"
                width="80"
                height="4"
                className="rounded-3xl -rotate-12 relative top-16"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/img/media/messenger.jpg"
                alt="messenger"
                width="80"
                height="4"
                className="rounded-2xl -rotate-12 relative top-4"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/img/media/facebook.jpg"
                alt="facebook"
                width="80"
                height="4"
                className="rounded-2xl -rotate-6 relative -top-4"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/img/media/gmail.jpg"
                alt="gmail"
                width="80"
                height="4"
                className="rounded-2xl relative -top-6"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/img/media/msg.jpg"
                alt="msg"
                width="80"
                height="4"
                className="rounded-2xl relative -top-6"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/img/media/instagram.jpg"
                alt="instagram"
                width="80"
                height="4"
                className="rounded-2xl rotate-12 relative -top-4"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/img/media/twitter.jpg"
                alt="twitter"
                width="80"
                height="4"
                className="rounded-2xl rotate-12 relative top-4"
              />
            </Link>
          </div>
          <div>
            <Link href="#">
              <Image
                src="/img/media/idk.jpg"
                alt="idk"
                width="80"
                height="4"
                className="rounded-2xl rotate-12 relative top-16"
              />
            </Link>
          </div>
        </div>
              <div className="pl-[311px] pr-[311px] pb-32">
                  <p className="text-[38.4px] font-semibold text-center">Integrate Siena with your help desk in 1-click and start using your autonomous customer service with minimal setup. Get your AI superhuman up and running 90% faster and more efficient than the average automation tools.</p>
        </div>
      </section>
    </>
  );
}
