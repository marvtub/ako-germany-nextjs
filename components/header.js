import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import Link from "next/link";

function Header() {
  const navigation = [
    { name: "Produkt", href: "/#produkt" },
    { name: "Features", href: "/#features" },
    { name: "Über uns", href: "/#about" },
  ];
  const login = { name: "Login", href: "#" };

  return (
    <div>
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start "
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <span className="sr-only">Workflow</span>
                <Link href="/">
                  <img
                    className="h-8 w-auto sm:h-10 cursor-pointer"
                    src="https://www.ako.com/wp-content/uploads/2020/01/Logo-AKO-Group-2.png"
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="font-medium text-gray-500 hover:text-gray-900 link link-underline link-underline-black">
                    {item.name}
                  </a>
                </Link>
              ))}
              <a
                href="#"
                className="font-medium text-rose-700 hover:text-rose-500"
              >
                Log in
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://www.ako.com/wp-content/uploads/2020/01/Logo-AKO-Group-2.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 link link-underline link-underline-black">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <a
                href={login.href}
                className="block w-full px-5 py-3 text-center font-medium text-rose-700 bg-gray-50 hover:bg-gray-100"
              >
                {login.name}
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default Header;
