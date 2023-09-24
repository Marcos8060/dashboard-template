import React, { useState, ReactNode } from "react";
import Header from "../header";
import Sidebar from "../sidebar";


const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`${collapsed ? "w-16" : "w-72"} h-screen md:block hidden`}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={() => setCollapsed((prev) => !prev)}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Header collapsed={collapsed} />
        <div className="bg-background p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
