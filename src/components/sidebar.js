import React from 'react'
import { menus } from '@/utils/menu'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Sidebar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className=''>
      <header className='h-[10vh] shadow flex items-center justify-center text-xl font-bold'>Logo</header>
      <section className='my-4 px-4'>
        <div>
        <ul className="space-y-4 mb-4 overflow-y-auto">
          {menus.map((menu, index) => (
            <li key={index}>
              <>
                <Link
                  href={menu.href}
                  className={`flex items-center text-sm justify-between py-2 px-2 cursor-pointer ${
                    currentPath === menu.href
                      ? "text-white bg-primary rounded px-12 py-3 font-semibold"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6">{menu.icon}</span>{" "}
                    <span>{menu.label}</span>
                  </div>
                </Link>
              </>
            </li>
          ))}
        </ul>
        </div>
      </section>
    </div>
  )
}

export default Sidebar