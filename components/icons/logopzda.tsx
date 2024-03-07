// import Image from 'next/image';

// export default function LogoIcon() {
//   return (
//     <div className="h-4 w-4">
//       <Image
//         src="./logo512.png" // Replace "/path/to/imagelogo.png" with the actual path to your image
//         alt={`${process.env.SITE_NAME}`}
//         // width={32} // Set the width of the image
//         // height={28} // Set the height of the image
//       />
//     </div>
//   );
// }
/////////////////////////////
// import clsx from 'clsx';
import Image from 'next/image'; // Import next/image
import Imagename from '/logo512.png';

export default function LogoIcon() {
  return (
    <>
      {' '}
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl">
          <Image
            src={Imagename} // Replace "/path/to/imagelogo.png" with the actual path to your image
            className=""
            alt="logo"
            width={64} // Set the width of the image
            height={58} // Set the height of the image
          />
        </div>
      </div>
    </>
  );
}
