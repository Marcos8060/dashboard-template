import { BiSolidDashboard } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { BsCalendarEvent } from "react-icons/bs";
import { MdLocalPharmacy } from "react-icons/md";

export const menus = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <BiSolidDashboard className="text-xl" />,
  },
  {
    label: "Users",
    href: "/dashboard/users",
    icon: <HiUsers className="text-xl" />,
    children: [
      {
        label: "All Users",
        href: "/dashboard/users/all-users",
        icon: <HiUsers className="" />,
        permission: "ACCESS_EMPLOYEES",
      },
      {
        label: "Approved Users",
        href: "/dashboard/users/approved-users",
        icon: <HiUsers className="" />,
      },
    ],
  },
  {
    label: "Schedule",
    href: "/dashboard/schedule",
    icon: <BsCalendarEvent className="text-xl" />,
  },
  {
    label: "Phamarcy",
    href: "/dashboard/pharmacy",
    icon: <MdLocalPharmacy className="text-xl" />,
  },
];

export const dashboardData = [
  {
    label: "Projects",
    number: 12,
    // icon: <HomeIcon className="w-6 h-8" />,
  },
  {
    label: "Clients",
    number: 44,
    // icon: <HomeIcon className="w-6 h-8" />,
  },
  {
    label: "Tasks",
    number: 37,
    // icon: <HomeIcon className="w-6 h-8" />,
  },
  {
    label: "Employees",
    number: 218,
    // icon: <HomeIcon className="w-6 h-8" />,
  },
];
