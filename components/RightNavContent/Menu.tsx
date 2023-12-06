// Menu.tsx
"use client";
import { toggleOption } from "@/slices/menuSlice";
import Link from "next/link";
import React, { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { GrFormClose } from "react-icons/gr";

import MobileMenu from "@/components/MobileMenu/page";
const Menu = () => {
  const dispatch = useDispatch();
  const menuState = useSelector((state: any) => state.menutoggle.value); // Corrected selector
 
  return (
    <>
      <div
        className={`flex items-center min-[621px]:hidden max-[1370px]:flex bg-gray-100 h-[56px] mx-4 p-4 cursor-pointer rounded-full gap-2
         `}
        onClick={() => {
          dispatch(toggleOption());
        }}
      >
        <div>{menuState ? "Close" : "Menu"}</div>

        <div className="bg-black text-white h-8 w-8 flex items-center justify-center rounded-full">
          {menuState ? (
            <GrFormClose size={20} />
          ) : (
            <TbMenuDeep className="text-white" />
          )}
        </div>
      </div>

      {menuState && <MobileMenu />}
    </>
  );
};

export default Menu;
