// import clsx from 'clsx';
import Image from 'next/image'; // Import next/image
import Imagename from '/700x700.png';

export default function LogoIcon() {
  return (
    <>
      {' '}
      <div tw="flex h-full w-full flex-col items-center justify-center bg-white">
        <div tw="flex flex-none items-center justify-center border border-neutral-700 h-[60px] w-[60px] rounded-2xl">
          <Image
            src={Imagename} // Replace "/path/to/imagelogo.png" with the actual path to your image
            className="h-4 h-[60px] w-4 w-[60px] rounded-xl fill-black dark:fill-white"
            alt="logo"
            width={60} // Set the width of the image
            height={60} // Set the height of the image
          />
        </div>
      </div>
    </>
  );
}
