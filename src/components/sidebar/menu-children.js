import React, { useState } from "react";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";


export const MenuChild = ({ menu, index, collapsed }) => {
  const [showChild, setShowChild] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const icon = showChild == true ? <AiFillCaretDown /> : <AiFillCaretRight />;

  return (
    <>
      <li key={index}>
        {!collapsed && menu?.children ? (
          <>
            <span
              onClick={() => setShowChild((prev) => !prev)}
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
              className={`${currentPath === menu.href ? 'text-white bg-primary p-2 rounded' : ''} flex text-sm items-center gap-2 hover:bg-background p-2 rounded`}
              href={menu.href}
            >
              <span className="w-6">{menu.icon}</span>{" "}
              <span>{!collapsed && menu.label}</span>
            </Link>
          </>
        )}
        {showChild && (
          <ul>
            {menu?.children?.map((child, index) => (
              <li key={index} className="px-8 text-sm">
                <Link
                  className={`${currentPath === child.href ? 'bg-primary text-white p-2 rounded flex my-2 items-center gap-2' : 'flex my-2 items-center gap-2 hover:bg-background hover:text-primary rounded p-2'} `}
                  href={child.href}
                >
                  {/* <span className="w-6">{child.icon}</span>{" "} */}
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
