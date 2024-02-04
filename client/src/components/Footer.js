import * as React from "react";

export default function Footer(props) {
  return (
    <div className="flex gap-5 justify-between self-stretch px-20 py-11 mt-16 w-full bg-rose-200 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 self-start mt-8 text-black">
          <div className="text-5xl font-bold max-md:text-4xl">Big At Heart</div>
          <div className="mt-16 text-2xl max-md:mt-10">
            Tel.: 999
            <br />
            Address: 100 Acre Woods, Pooh Bear, Woods 1234567
          </div>
        </div>
        <div className="flex flex-col flex-1 my-auto">
          <div className="text-2xl text-black">
            Follow us on our Social Media!
          </div>
          <div className="flex gap-5 justify-between pr-20 mt-7 max-md:pr-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ea529347e12ccba02831a9d8e5496ecf02d537b32089774280d8c1751fed70f7?apiKey=0cba06582df446a9859eb90c47a74d7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea529347e12ccba02831a9d8e5496ecf02d537b32089774280d8c1751fed70f7?apiKey=0cba06582df446a9859eb90c47a74d7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea529347e12ccba02831a9d8e5496ecf02d537b32089774280d8c1751fed70f7?apiKey=0cba06582df446a9859eb90c47a74d7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea529347e12ccba02831a9d8e5496ecf02d537b32089774280d8c1751fed70f7?apiKey=0cba06582df446a9859eb90c47a74d7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea529347e12ccba02831a9d8e5496ecf02d537b32089774280d8c1751fed70f7?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea529347e12ccba02831a9d8e5496ecf02d537b32089774280d8c1751fed70f7?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea529347e12ccba02831a9d8e5496ecf02d537b32089774280d8c1751fed70f7?apiKey=0cba06582df446a9859eb90c47a74d7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea529347e12ccba02831a9d8e5496ecf02d537b32089774280d8c1751fed70f7?apiKey=0cba06582df446a9859eb90c47a74d7f&"
              className="my-auto max-w-full aspect-[1.16] w-[100px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c515457490182d35354e31e0967ce49ffc2d151a041532430572050f988f100?apiKey=0cba06582df446a9859eb90c47a74d7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c515457490182d35354e31e0967ce49ffc2d151a041532430572050f988f100?apiKey=0cba06582df446a9859eb90c47a74d7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c515457490182d35354e31e0967ce49ffc2d151a041532430572050f988f100?apiKey=0cba06582df446a9859eb90c47a74d7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c515457490182d35354e31e0967ce49ffc2d151a041532430572050f988f100?apiKey=0cba06582df446a9859eb90c47a74d7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c515457490182d35354e31e0967ce49ffc2d151a041532430572050f988f100?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c515457490182d35354e31e0967ce49ffc2d151a041532430572050f988f100?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c515457490182d35354e31e0967ce49ffc2d151a041532430572050f988f100?apiKey=0cba06582df446a9859eb90c47a74d7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c515457490182d35354e31e0967ce49ffc2d151a041532430572050f988f100?apiKey=0cba06582df446a9859eb90c47a74d7f&"
              className="max-w-full aspect-square w-[108px]"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 text-2xl font-bold text-black max-md:max-w-full">
          <div className="self-end mr-3 max-md:mr-2.5">
            Find us at 100 Acre Woods
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ec9eba253d89e6ababa5bfb2420bf913306b1e5ed6a81118f913acdf724d318c?apiKey=0cba06582df446a9859eb90c47a74d7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec9eba253d89e6ababa5bfb2420bf913306b1e5ed6a81118f913acdf724d318c?apiKey=0cba06582df446a9859eb90c47a74d7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec9eba253d89e6ababa5bfb2420bf913306b1e5ed6a81118f913acdf724d318c?apiKey=0cba06582df446a9859eb90c47a74d7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec9eba253d89e6ababa5bfb2420bf913306b1e5ed6a81118f913acdf724d318c?apiKey=0cba06582df446a9859eb90c47a74d7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec9eba253d89e6ababa5bfb2420bf913306b1e5ed6a81118f913acdf724d318c?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec9eba253d89e6ababa5bfb2420bf913306b1e5ed6a81118f913acdf724d318c?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec9eba253d89e6ababa5bfb2420bf913306b1e5ed6a81118f913acdf724d318c?apiKey=0cba06582df446a9859eb90c47a74d7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ec9eba253d89e6ababa5bfb2420bf913306b1e5ed6a81118f913acdf724d318c?apiKey=0cba06582df446a9859eb90c47a74d7f&"
            className="mt-4 w-full aspect-[1.59] max-md:max-w-full"
          />
        </div>
      </div>
  );
}
