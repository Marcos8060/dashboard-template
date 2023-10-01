import React, { useState, ReactNode, useRef } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div
        className={`${
          collapsed ? "w-16" : "w-64"
        } h-screen md:block hidden bg-white`}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={() => setCollapsed((prev) => !prev)}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Header collapsed={collapsed} />
        <div className=" p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
