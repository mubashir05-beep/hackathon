import React from "react";

import From from "@/components/Form/index";
const page = () => {
  return (
    <div className="absolute top-24 text-white    max-[966px]:flex-col flex items-center max-[966px]:h-full  max-[966px]:items-center justify-center left-6 bottom-6 gap-8  right-6">
      <div className="flex flex-col  justify-between w-full">
        <div className="text-[120px] max-[1390px]:text-[80px] font-semibold">Contact Us</div>
        <div className="w-[600px] max-[1390px]:px-0 max-[1390px]:w-full px-6 text-gray-200 leading-8">
          You can contact us via email at
          {" "}
          <a href="mailto:innojam40@gmail.com">innojam40@gmail.com</a> or by
          phone at  {" "}<a href="tel:+923056207807">+92 305 6207807</a>.
          Alternatively, you may reach out to us by filling up the form below,
          and we will get back to you shortly.
        </div>
      </div>
      <From />
    </div>
  );
};

export default page;
