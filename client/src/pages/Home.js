import * as React from "react";
import home from '../pictures/home_image.png';
import about from '../pictures/about_us.png';
import '../pages/Home.css';

export default function Home(props) {
  return (
    <>
    <div className="main-div">
      <img  src={home}
            loading="lazy"
      /> 
      <h1 className="text"> “A helping hand can be a ray of sunshine in this cloudy world.” </h1>
    </div>
    <div className="mt-10 text-5xl text-center font-bold text-black max-md:mt-10 max-md:text-4xl">
        About Us
      </div>
      <div className="mt-10 m-3 px-16 w-full max-w-[1632px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ba6a1f21929ab3384164ba5940546515471c2176e73af2b42191fe2f6ceec4?apiKey=0cba06582df446a9859eb90c47a74d7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ba6a1f21929ab3384164ba5940546515471c2176e73af2b42191fe2f6ceec4?apiKey=0cba06582df446a9859eb90c47a74d7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ba6a1f21929ab3384164ba5940546515471c2176e73af2b42191fe2f6ceec4?apiKey=0cba06582df446a9859eb90c47a74d7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ba6a1f21929ab3384164ba5940546515471c2176e73af2b42191fe2f6ceec4?apiKey=0cba06582df446a9859eb90c47a74d7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ba6a1f21929ab3384164ba5940546515471c2176e73af2b42191fe2f6ceec4?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ba6a1f21929ab3384164ba5940546515471c2176e73af2b42191fe2f6ceec4?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ba6a1f21929ab3384164ba5940546515471c2176e73af2b42191fe2f6ceec4?apiKey=0cba06582df446a9859eb90c47a74d7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8ba6a1f21929ab3384164ba5940546515471c2176e73af2b42191fe2f6ceec4?apiKey=0cba06582df446a9859eb90c47a74d7f&"
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
      <div className="mt-16 text-5xl text-center font-bold text-black max-md:mt-10 max-md:text-4xl">
        Meet the Team
      </div>
      <div className="mt-16 w-full max-w-[1622px] max-md:mt-10 max-md:max-w-full p-16">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f38f7bbf9c3946b50378e9eb420fe6257561b8b5c137203e23ce5e01d925e686?apiKey=0cba06582df446a9859eb90c47a74d7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f38f7bbf9c3946b50378e9eb420fe6257561b8b5c137203e23ce5e01d925e686?apiKey=0cba06582df446a9859eb90c47a74d7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f38f7bbf9c3946b50378e9eb420fe6257561b8b5c137203e23ce5e01d925e686?apiKey=0cba06582df446a9859eb90c47a74d7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f38f7bbf9c3946b50378e9eb420fe6257561b8b5c137203e23ce5e01d925e686?apiKey=0cba06582df446a9859eb90c47a74d7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f38f7bbf9c3946b50378e9eb420fe6257561b8b5c137203e23ce5e01d925e686?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f38f7bbf9c3946b50378e9eb420fe6257561b8b5c137203e23ce5e01d925e686?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f38f7bbf9c3946b50378e9eb420fe6257561b8b5c137203e23ce5e01d925e686?apiKey=0cba06582df446a9859eb90c47a74d7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f38f7bbf9c3946b50378e9eb420fe6257561b8b5c137203e23ce5e01d925e686?apiKey=0cba06582df446a9859eb90c47a74d7f&"
                className="w-full aspect-[1.09] max-md:max-w-full"
              />
              <div className="mt-20 max-md:mt-10 max-md:max-w-full ">
                Hi! I’m ... <br />
                Email: 
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ab289ca02f518787b03dfa131c1a57570e17fcea1786e355e2b76808ba8ea64?apiKey=0cba06582df446a9859eb90c47a74d7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ab289ca02f518787b03dfa131c1a57570e17fcea1786e355e2b76808ba8ea64?apiKey=0cba06582df446a9859eb90c47a74d7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ab289ca02f518787b03dfa131c1a57570e17fcea1786e355e2b76808ba8ea64?apiKey=0cba06582df446a9859eb90c47a74d7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ab289ca02f518787b03dfa131c1a57570e17fcea1786e355e2b76808ba8ea64?apiKey=0cba06582df446a9859eb90c47a74d7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ab289ca02f518787b03dfa131c1a57570e17fcea1786e355e2b76808ba8ea64?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ab289ca02f518787b03dfa131c1a57570e17fcea1786e355e2b76808ba8ea64?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ab289ca02f518787b03dfa131c1a57570e17fcea1786e355e2b76808ba8ea64?apiKey=0cba06582df446a9859eb90c47a74d7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ab289ca02f518787b03dfa131c1a57570e17fcea1786e355e2b76808ba8ea64?apiKey=0cba06582df446a9859eb90c47a74d7f&"
                className="w-full aspect-square max-md:max-w-full"
              />
              <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                Hi! I’m ...
                <br />
                Email:
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa2761777a43c339e22157c35e56a1133b295a5862dccf81c8d993be7e462093?apiKey=0cba06582df446a9859eb90c47a74d7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2761777a43c339e22157c35e56a1133b295a5862dccf81c8d993be7e462093?apiKey=0cba06582df446a9859eb90c47a74d7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2761777a43c339e22157c35e56a1133b295a5862dccf81c8d993be7e462093?apiKey=0cba06582df446a9859eb90c47a74d7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2761777a43c339e22157c35e56a1133b295a5862dccf81c8d993be7e462093?apiKey=0cba06582df446a9859eb90c47a74d7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2761777a43c339e22157c35e56a1133b295a5862dccf81c8d993be7e462093?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2761777a43c339e22157c35e56a1133b295a5862dccf81c8d993be7e462093?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2761777a43c339e22157c35e56a1133b295a5862dccf81c8d993be7e462093?apiKey=0cba06582df446a9859eb90c47a74d7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa2761777a43c339e22157c35e56a1133b295a5862dccf81c8d993be7e462093?apiKey=0cba06582df446a9859eb90c47a74d7f&"
                className="w-full aspect-[0.97] max-md:max-w-full"
              />
              <div className="self-center mt-12 max-md:mt-10">
                Hi! I’m ...
                <br />
                Email:
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


