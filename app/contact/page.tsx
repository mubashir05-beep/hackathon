import React from "react";

import From from "@/components/Form/index";
const page = () => {
  return (
    <div className="absolute top-28 text-white bottom-6  p-6 max-[966px]:flex-col flex items-center max-[966px]:h-full  max-[966px]:items-center   gap-8">
      <div className="flex flex-col max-[966px]:items-center  justify-between w-full">
        <div className="text-[120px] max-[1390px]:text-[80px] max-[500px]:text-[60px] max-[380px]:text-[40px]    max-[966px]:text-center font-semibold">
          Contact Us
        </div>
        <div className="w-[600px] max-[1390px]:px-0 max-[1390px]:w-full  max-[966px]:text-center text-[15px] max-[380px]:text-[14px] text-gray-200 leading-8">
          You can contact us via email at{" "}
          <a href="mailto:innojam40@gmail.com">innojam40@gmail.com</a> or by
          phone at <a href="tel:+923056207807">+92 305 6207807</a>.
          Alternatively, you may reach out to us by filling up the form below,
          and we will get back to you shortly.
        </div>
      </div>
      <From />
    </div>
  );
};

export default page;
