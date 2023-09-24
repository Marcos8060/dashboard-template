import React from "react";
import { menus } from "@/utils/menu";
import { useRouter } from "next/router";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { MenuChild } from "./menu-children";

const Sidebar = ({ collapsed, setCollapsed }) => {

  return (
    <div className="">
      <header className="h-[10vh] shadow flex items-center justify-between font-bold">
        {!collapsed && <div className="px-8">Logo</div>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`${collapsed ? 'mx-auto' : 'mr-2'} hover:bg-primary hover:text-white p-2 rounded flex place-items-center justify-center`}
        >
          {collapsed ? (
            <BsChevronDoubleRight className="text-xl" />
          ) : (
            <BsChevronDoubleLeft className="text-xl" />
          )}
        </button>
      </header>
      <section className="my-4 px-4">
        <div>
          <ul className="space-y-4 my-4">
            {menus.map((menu, index) => (
              <MenuChild key={index} {...{ index, menu, collapsed }} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
