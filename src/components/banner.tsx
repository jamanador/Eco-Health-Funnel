import {  IoMdStar } from "react-icons/io";
import { config } from "../config";
import { AddToCartButton } from "./add-to-cart-button";
import { CartBadge } from "./cart-badge";
import { OffersBadge } from "./offers-badge";
import { SalesBadge } from "./sales-badge";
import { GiCheckMark } from "react-icons/gi";

export function Banner() {
  return (
    <section className=" full-width grid-containerxl  bg-[#FAF3E1] ">
      <div className="lg:gird-cols-2 relative  grid items-center justify-center justify-items-center gap-y-0 py-14 pt-10 text-center md:gap-x-10 md:gap-y-5 md:text-start lg:grid-cols-[80%_1fr] xl:grid-cols-[75%_1fr] lg:justify-items-start mx-0 lg:mx-3 xl:mx-0">
        <div className="mb-6 md:my-0 flex flex-wrap items-center justify-center gap-2 sm:gap-x-3 rounded-full border bg-white px-3 sm:px-4 py-2 text-xs font-semibold md:font-bold shadow-lg md:py-1  sm:text-base ">
          <span className="flex items-center ">
            {Array.from({ length: 5 }).map((_, index) => (
              <IoMdStar
                className="-ms-1 size-4 sm:size-5 md:size-[1.675rem] text-[#e5c729]"
                key={`star${index}`}
              />
            ))}
          </span>
          <span>4.7/5 stars</span>
          <span>859 verified reviews</span>
        </div>
        <p className="max-w-[99%] md:max-w-[80%]  lg:max-w-[90%] xl:max-w-[80%] text-wrap text-[1.5rem]   md:text-[34px] font-black  text-[#8e2253] md:col-start-1 lg:text-[40px] xl:text-[44px] lg:leading-[1.25] text-center lg:text-start">
        <span className="text-black">THE BLADDER-</span>BUILDING SUPER NUTRIENT <span className="text-black">FOR LEAK-FREE DAYS</span> AND RESTFUL NIGHTS!
        </p>
        <p className="text-[15px] md:text-base xl:text-lg col-span-full  lg:max-w-[55ch] xl:max-w-[63ch] text-pretty font-semibold leading-relaxed lg:col-span-1 lg:row-start-3 text-center lg:text-start">
          If bladder problems have you stressed, frustrated, and embarrassed
          then it might be time to try this remedy you can try at home. It’s
          natural, affordable and works day and night.
        </p>
        <ul className="col-span-full col-start-1 space-y-2 pb-5 text-start font-semibold md:text-xl lg:col-span-1 lg:row-start-4">
          {config.bannerOfferings.map((offering, index) => (
            <li className="flex items-start gap-x-2" key={`offering${index}`}>
              <div>
                <GiCheckMark  
                className=" size-[15px] md:size-5 xl:size-6 p-1  bg-[#04C515] border-red-300   rounded-[4px] text-white " />
              </div>
              <span className="text-sm lg:text-[15px] xl:text-lg">{offering}</span>
            </li>
          ))}
        </ul>
        <SalesBadge className="row-start-7 md:row-start-7 lg:row-start-5 my-6 md:my-0" />
        <CartBadge className="row-start-8 text-center md:row-start-8 lg:row-start-6 mb-6 md:my-0" />

        <AddToCartButton className="col-span-full row-start-4 md:row-start-4 lg:col-span-1 lg:col-start-1 lg:row-start-7" />
        <OffersBadge className="col-span-full row-start-5 md:row-start-5 lg:col-span-1 lg:col-start-1 lg:row-start-8 my-6 md:my-0"  />
        <div className="right-0 top-1/2 row-start-3 max-w-[40rem] md:max-w-[42rem] md:row-start-3 lg:col-start-2  lg:row-start-1 lg:absolute lg:row-span-8 lg:w-[min(45vw,_40rem)] lg:max-w-none lg:-translate-y-1/2">
          <img
            className="object-center object-cover p-5"
            src="/images/hero-2.png"
            alt="banner image"
          />
        </div>
        <picture className="mt-4 md:mt-0 left-[35%] lg:left-[45%] xl:left-[41%] top-[44%] xl:top-[42%] col-span-full  max-w-[16rem] lg:absolute lg:max-w-[6%] xl:max-w-20 ">
          <source
            media="(min-width:64rem)"
            srcSet="/icons/icon-manufacturer-vertical.webp"
          />
          <source srcSet="/icons/icon-manufacturer-horizontal.webp" />
          <img
            src="/icons/icon-manufacturer-horizontal.webp"
            alt="Manufacturer logos"
          />
        </picture>
      </div>
    </section>
  );
}


