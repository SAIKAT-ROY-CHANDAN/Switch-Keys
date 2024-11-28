import { cn } from "@/lib/utils";
import { memo } from "react";

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export const Trash = ({ className }: { className?: string }) => {
  return <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("size-6", className)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  </>
}

export const Edit = ({ className }: { className?: string }) => {
  return <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("size-6", className)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  </>
}

export const Add = ({ className }: { className?: string }) => {
  return <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("size-6", className)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  </>
}

// export const CartSvg = ({ className }: { className?: string }) => {
//   return <>
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("size-6", className)}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
//     </svg>
//   </>
// }

export const CartSvg = memo(({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("size-6", className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
});

export const SearchIcon = ({ className }: { className?: string }) => {
  return <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" strokeWidth={1.5} stroke="currentColor" className={cn("size-4", className)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  </>
}

export const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Precision at Your Fingertips</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A mechanical keyboard offers unmatched precision and responsiveness, making it the perfect companion for gamers, programmers, and typists seeking a superior typing experience.
      </p>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">The Ultimate Typing Experience</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience the tactile feedback and satisfying click of a mechanical keyboard, designed to enhance your typing speed and accuracy, providing an unparalleled typing journey.
      </p>
    </div>
  );
};
export const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Built for Performance</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Engineered for durability and performance, a mechanical keyboard is built to withstand heavy use, offering reliable keypresses and a customizable typing experience tailored to your needs.
      </p>
    </div>
  );
};
export const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Elevate Your Workspace</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Transform your workspace with a mechanical keyboard that combines aesthetic appeal and functional design, ensuring every keystroke is both efficient and enjoyable.
      </p>
    </div>
  );
};

export const SwitchKeysLogo = () => {
  return (
    <svg
      width="45"
      height="61"
      viewBox="0 0 87 61"
      xmlns="http://www.w3.org/2000/svg"
      className="group fill-current transition-all duration-500"
    >
      <path
        className="group-hover:fill-red-500"
        d="M1.33589 10.5L26.3359 36.5L11.8359 36C4.60546 31.2668 2.43005 28.4322 0.335885 23C-0.13928 20.5209 -0.339856 15.4465 1.33589 10.5Z"
        fill="url(#paint0_linear_26_5)"
      />
      <path
        className="group-hover:fill-red-500"
        d="M47.3357 11.5H18.3357L9.33569 2L11.8359 0H58.3357L47.3357 11.5Z"
        fill="url(#paint1_linear_26_5)"
      />
      <path
        className="group-hover:fill-red-500"
        d="M44.3357 24L68.3357 0H85.3357L55.3357 30.5L86.3357 61H68.3357L31.8357 24H44.3357Z"
        fill="url(#paint2_linear_26_5)"
      />
      <path
        className="group-hover:fill-red-500"
        d="M12.3357 49.5L0.335885 44C-0.300068 47.5156 0.0422697 49.4959 2.33569 53L2.35268 53.0218C5.28614 56.7903 6.93579 58.9095 13.3357 61H49.3357L38.3357 49.5H12.3357Z"
        fill="url(#paint3_linear_26_5)"
      />
      <defs>
        <linearGradient id="paint0_linear_26_5" x1="43.1678" y1="0" x2="67" y2="61" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E9342C" />
          <stop offset="1" stopColor="#F87C7C" />
        </linearGradient>
        <linearGradient id="paint1_linear_26_5" x1="43.1678" y1="0" x2="67" y2="61" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E9342C" />
          <stop offset="1" stopColor="#F87C7C" />
        </linearGradient>
        <linearGradient id="paint2_linear_26_5" x1="43.1678" y1="0" x2="67" y2="61" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E9342C" />
          <stop offset="1" stopColor="#F87C7C" />
        </linearGradient>
        <linearGradient id="paint3_linear_26_5" x1="43.1678" y1="0" x2="67" y2="61" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E9342C" />
          <stop offset="1" stopColor="#F87C7C" />
        </linearGradient>
      </defs>
    </svg>
  );
};