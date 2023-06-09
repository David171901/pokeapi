import React from "react";

export const ButtonTop = () => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div
        className="fixed bottom-5 right-5 button w-16 h-16 bg-blue-500 rounded-full cursor-pointer select-none
        active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
        active:border-b-[0px]
        transition-all duration-150 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]
        border-[1px] border-blue-400"
        onClick={() => topFunction()}
      >
        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
          <i className="fa-regular fa-circle-up text-3xl"></i>
        </span>
      </div>
    </>
  );
};
