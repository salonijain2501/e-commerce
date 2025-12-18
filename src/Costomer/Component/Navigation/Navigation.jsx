import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { navigation } from "../../../config/navigationMenu";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const navigate = useNavigate();

  const handleClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  return (
    <header className="bg-white border-b">
      {/* TOP STRIP */}
      <div className="bg-indigo-600 text-white text-sm text-center py-2">
        Get free delivery on orders over $100
      </div>

      {/* MAIN NAV */}
      <div className="mx-auto px-10">
        <div className="flex h-16 items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center space-x-8">
            {/* LOGO */}
            <Link to="/">
              <img
                src="https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png"
                alt="Logo"
                className="h-8 w-8"
              />
            </Link>

            {/* MENU */}
            <Popover.Group className="hidden lg:flex space-x-8">
              {navigation.categories.map((category) => (
                <Popover key={category.name} className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-indigo-600 border-b-2 border-indigo-600"
                            : "text-gray-700",
                          "font-medium text-sm"
                        )}
                      >
                        {category.name}
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-0 top-full z-20 mt-4 w-screen max-w-4xl bg-white shadow-lg">
                          <div className="grid grid-cols-3 gap-8 p-8">
                            {category.sections.map((section) => (
                              <div key={section.id}>
                                <p className="font-semibold text-gray-900">
                                  {section.name}
                                </p>
                                <ul className="mt-4 space-y-2">
                                  {section.items.map((item) => (
                                    <li
                                      key={item.id}
                                      onClick={() =>
                                        handleClick(
                                          category,
                                          section,
                                          item,
                                          close
                                        )
                                      }
                                      className="cursor-pointer text-sm text-gray-600 hover:text-indigo-600"
                                    >
                                      {item.name}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ))}

              {/* SIMPLE LINKS */}
              {navigation.pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.href}
                  className="text-sm font-medium text-gray-700 hover:text-indigo-600"
                >
                  {page.name}
                </Link>
              ))}
            </Popover.Group>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center space-x-5">
            <MagnifyingGlassIcon
              onClick={() => navigate("/products/search")}
              className="h-6 w-6 cursor-pointer text-gray-500 hover:text-black"
            />

            <div
              onClick={() => navigate("/cart")}
              className="relative cursor-pointer"
            >
              <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
                2
              </span>
            </div>

            {/* USER AVATAR */}
            <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">
              R
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
