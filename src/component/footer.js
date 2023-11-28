import React from "react";

export default function Footer() {
  return (
    <div className="px-44  pt-20 pb-0 w-full h-full bg-gainsboro relative flex flex-col">
      <div className="flex w-full">
        <div className="w-3/12">
          <img className="w-[64px]" src="/assets/logo.svg" alt="logo" />
          <span className="pt-12 pb-3 block text-[13px] text-grayx-600 font-semibold">
            FOLLOW US ON
          </span>
          <div className="flex gap-3">
            <img
              className="cursor-pointer"
              src="/assets/social/facebook.svg"
              alt="logo"
            />
            <img
              className="cursor-pointer"
              src="/assets/social/instagram.svg"
              alt="logo"
            />
            <img
              className="cursor-pointer"
              src="/assets/social/algorithm.svg"
              alt="logo"
            />
            <img
              className="cursor-pointer"
              src="/assets/social/linkedin.svg"
              alt="logo"
            />
            <img
              className="cursor-pointer"
              src="/assets/social/whatsapp.svg"
              alt="logo"
            />
          </div>
        </div>
        <div className="w-9/12 flex flex-row gap-24 justify-center">
          <div>
            <h6 className="text-grayx-600 text-[13px] font-semibold">
              Company
            </h6>
            <div className="pt-8 flex flex-col gap-5 text-[14px] ">
              <a href="javascript();">Section 1</a>
              <a href="javascript();">Section 2</a>
              <a href="javascript();">Section 3</a>
              <a href="javascript();">Section 4</a>
              <a href="javascript();">Section 5</a>
            </div>
          </div>
          <div>
            <h6 className="text-grayx-600 text-[13px] font-semibold"> Text</h6>
            <div className="pt-8 flex flex-col gap-5 text-[14px] ">
              <a href="javascript();">Section 1</a>
              <a href="javascript();">Section 2</a>
              <a href="javascript();">Section 3</a>
              <a href="javascript();">Section 4</a>
              <a href="javascript();">Section 5</a>
            </div>
          </div>
          <div>
            <h6 className="text-grayx-600 text-[13px] font-semibold"> Text</h6>
            <div className="pt-8 flex flex-col gap-5 text-[14px] ">
              <a href="javascript();">Section 1</a>
              <a href="javascript();">Section 2</a>
              <a href="javascript();">Section 3</a>
              <a href="javascript();">Section 4</a>
              <a href="javascript();">Section 5</a>
            </div>
          </div>
          <div>
            <h6 className="text-grayx-600 text-[13px] font-semibold"> Text</h6>
            <div className="pt-8 flex flex-col gap-5 text-[14px] ">
              <a href="javascript();">Section 1</a>
              <a href="javascript();">Section 2</a>
              <a href="javascript();">Section 3</a>
              <a href="javascript();">Section 4</a>
              <a href="javascript();">Section 5</a>
            </div>
          </div>
          <div>
            <h6 className="text-grayx-600 text-[13px] font-semibold"> Legal</h6>
            <div className="pt-8 flex flex-col gap-5 text-[14px] ">
              <a href="javascript();">Section 1</a>
              <a href="javascript();">Section 2</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full border-t border-grayx-700 mt-10 py-[33px]">
        <div className="text-sm text-grayx-0">
          © Copyright 2023, All Rights Reserved by Algorithm X
        </div>
      </div>
    </div>
  );
}
