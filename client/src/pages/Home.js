import * as React from "react";

export default function Home(props) {
  return (
    <div className="flex flex-col items-center px-5">
      <div className="overflow-hidden relative flex-col justify-center items-center self-stretch px-16 pt-80 pb-80 w-full text-5xl font-bold text-black min-h-[785px] max-md:px-5 max-md:py-10 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        />
        “A helping hand can be a ray of sunshine in this cloudy world.”
      </div>
      <div className="mt-24 text-5xl font-bold text-black max-md:mt-10 max-md:text-4xl">
        About Us
      </div>
      <div className="mt-24 w-full max-w-[1632px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="grow w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="mt-9 text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 text-5xl font-bold text-black max-md:mt-10 max-md:text-4xl">
        Meet the Team
      </div>
      <div className="mt-36 w-full max-w-[1622px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="w-full aspect-[1.09] max-md:max-w-full"
              />
              <div className="mt-20 max-md:mt-10 max-md:max-w-full">
                Hi! I’m MAN Teng <br />
                Email: mantengsee@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="w-full aspect-square max-md:max-w-full"
              />
              <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                Hi! I’m Curtis. Call me CURt
                <br />
                Email:curtischang2510@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="w-full aspect-[0.97] max-md:max-w-full"
              />
              <div className="self-center mt-12 max-md:mt-10">
                Hi! I’m Wan Ching, a pooh lover
                <br />
                Email:pooh@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


