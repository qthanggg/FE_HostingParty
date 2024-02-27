import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const Navbar = () => {
  const NavLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About",
      link: "#",
    },
    {
      id: 1,
      name: "Contact",
      link: "#",
    },
  ];
  const DropdownLink = [
    {
      id: 1,
      name: "Party",
      link: "#",
    },
    {
      id: 1,
      name: "Drink",
      link: "#",
    },
  ];

  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="container flex justify-between py-4 sm:py-3">
          <div className="font-bold">Logo</div>
          <div>
            <ul className="flex items-center gap-10">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className="inline-block hover:text-primary text-xl font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="cusor-pointer group">
                <a
                  href="/#"
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdown
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white☐ text-black shadow-md p-2">
                  <ul>
                    {DropdownLink.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.link}
                          className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <button className="flex justify-center gap-2 bg-secondary text-xlh-[40] text-white px-5 py-2 hover:scale-105 duration-300">
                  <FaUser />
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
