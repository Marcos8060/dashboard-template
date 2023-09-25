import React, { useState, useEffect } from "react";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

export const MenuChild = ({ menu, index, collapsed }) => {
  const [showChild, setShowChild] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const icon = showChild === true ? <AiFillCaretDown /> : <AiFillCaretRight />;

  // Conditionally set showChild to false if the sidebar is collapsed
  const setShowChildCollapsed = () => {
    if (!collapsed) {
      setShowChild((prev) => !prev);
    } else {
      setShowChild(false);
    }
  };

  // Use useEffect to close child menus when sidebar is minimized
  useEffect(() => {
    if (collapsed) {
      setShowChild(false);
    }
  }, [collapsed]);

  return (
    <>
      <li key={index} className="">
        {!collapsed && menu?.children ? (
          <>
            <span
              onClick={setShowChildCollapsed} // Use the modified function
              className="flex text-sm items-center justify-between hover:bg-background hover:text-primary rounded p-2 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="w-6">{menu.icon}</span>{" "}
                <span>{!collapsed && menu.label}</span>
              </div>
              <div>
                <span className="cursor-pointer text-primary">{!collapsed && icon}</span>
              </div>
            </span>
          </>
        ) : (
          <>
            <Link
              className={`${
                currentPath === menu.href ? "text-white bg-primary p-2 rounded" : "hover:bg-background p-2 rounded"
              } flex text-sm items-center gap-2 `}
              href={menu.href}
            >
              <span className="w-6">{menu.icon}</span>{" "}
              <span>{!collapsed && menu.label}</span>
            </Link>
          </>
        )}
        {showChild && (
          <ul className={`${showChild ? 'bg-background rounded' : ''}`}>
            {menu?.children?.map((child, index) => (
              <li key={index} className="px-8 text-sm">
                <Link
                  className={`${
                    currentPath === child.href
                      ? "bg-primary text-white p-2 rounded flex my-2 items-center gap-2"
                      : "flex my-2 items-center gap-2 hover:bg-background hover:text-primary rounded p-2"
                  } `}
                  href={child.href}
                >
                  <span className="w-6">{child.icon}</span>{" "}
                  <span>{!collapsed && child.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};
