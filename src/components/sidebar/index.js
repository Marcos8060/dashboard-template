import React from "react";
import { menus } from "@/utils/menu";
import { useRouter } from "next/router";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { MenuChild } from "./menu-children";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="">
      <header className="h-[10vh] shadow px-2 flex items-center justify-between text-xl font-bold">
        {!collapsed && <>Logo</>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="pl-2 hover:bg-yellow hover:text-black p-1 rounded-full w-10 h-10 flex place-items-center justify-center"
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
