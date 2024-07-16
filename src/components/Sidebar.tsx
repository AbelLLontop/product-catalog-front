import { ComponentProps, useEffect, useState } from "react";
import { GrDocumentConfig } from "react-icons/gr";
import { ImAddressBook } from "react-icons/im";

import { TiThMenu } from "react-icons/ti";
import { PiStudentFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { cn } from "../utils/cn";
import {
  NavLink,
  useLocation,
} from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import useloginStore from "../store/login.store";

const SideNav = ({ className }: ComponentProps<"aside">) => {
  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <aside
      className={cn(
        className,
        "shadow-2xl w-[19rem] h-full bg-primary transition-all overflow-hidden flex-shrink-0",
        {
          "w-24": openSideNav,
        }
      )}
    >
      <nav>
        <div
          onClick={() => setOpenSideNav(!openSideNav)}
          className={cn(
            "h-12 flex mb-4 items-center cursor-pointer",
            "border-b border-white/10 p-4"
          )}
        >
          <TiThMenu
            className={cn("text-2xl text-white flex-shrink-0 transition-all", {
              "text-3xl ml-4": openSideNav,
            })}
          />
        </div>
        <ul className="">
          <li className="block px-1">
            <NavLink
              to="/registro-evaluaciones"
              className={({ isActive }) =>
                cn(
                  "text-white/60 py-3 px-5 flex gap-2 items-center rounded-lg whitespace-nowrap hover:text-white transition-all",
                  {
                    "px-8 ": openSideNav,
                    "bg-primaryHover text-white ": isActive,
                  }
                )
              }
            >
              <FaBook
                className={cn("text-xl flex-shrink-0 transition-all", {
                  "text-2xl": openSideNav,
                })}
              />
              <div
                className={cn("transition-all", {
                  "opacity-0 translate-x-full": openSideNav,
                })}
              >
                Evaluaciones
              </div>
            </NavLink>
          </li>
          <li>
            <Desplegable openSideNav={openSideNav} />
          </li>
      
          <li className="block px-1">
            <NavLink
              to="/estudiantes"
              className={({ isActive }) =>
                cn(
                  "text-white/60 py-3 px-5 flex gap-2 items-center rounded-lg whitespace-nowrap hover:text-white transition-all",
                  {
                    "px-8 ": openSideNav,
                    "bg-primaryHover text-white ": isActive,
                  }
                )
              }
            >
              <PiStudentFill
                className={cn("text-xl flex-shrink-0 transition-all", {
                  "text-2xl": openSideNav,
                })}
              />
              <div
                className={cn("transition-all", {
                  "opacity-0 translate-x-full": openSideNav,
                })}
              >
                Estudiantes
              </div>
            </NavLink>
          </li>
          <li className="block px-1">
            <NavLink
              to="/asistencia"
              className={({ isActive }) =>
                cn(
                  "text-white/60 py-3 px-5 flex gap-2 items-center rounded-lg whitespace-nowrap hover:text-white transition-all",
                  {
                    "px-8": openSideNav,
                    "bg-primaryHover text-white ": isActive,
                  }
                )
              }
            >
              <ImAddressBook
                className={cn("text-xl flex-shrink-0 transition-all", {
                  "text-2xl": openSideNav,
                })}
              />
              <div
                className={cn("transition-all", {
                  "opacity-0 translate-x-full": openSideNav,
                })}
              >
                Asistencia
              </div>
            </NavLink>
          </li>
          <li>
            <div onClick={()=> useloginStore.getState().logout()} className="p-4 text-white bg-red-700 cursor-pointer hover:bg-red-800">
            Logout
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const Desplegable = ({
  openSideNav,
}: ComponentProps<"div"> & { openSideNav: boolean }) => {
  const [isActive, setIsActive] = useState(false);
  const params = useLocation();
  useEffect(() => {
    if (params.pathname.includes("/config/")) {
      setIsActive(true);
    }
  }, [params]);

  return (
    <div className="cursor-pointer ">
      <div className="px-1">
        <div
          onClick={() => setIsActive(!isActive)}
          className={cn(
            "text-white/60 py-3 px-5  flex gap-2 items-center rounded-lg whitespace-nowrap hover:text-white transition-all",
            {
              "px-8": openSideNav,
              // "bg-primaryHover text-white": isActive,
            }
          )}
        >
          <GrDocumentConfig
            className={cn("text-xl flex-shrink-0 transition-all", {
              "text-2xl": openSideNav,
            })}
          />

          <div
            className={cn(
              "transition-all  flex items-center justify-between w-full",
              {
                "opacity-0 translate-x-full": openSideNav,
              }
            )}
          >
            Configuracion
            <IoIosArrowUp
              className={cn("text-xl flex-shrink-0 transition-all", {
                "rotate-180": isActive,
              })}
            />
          </div>
        </div>
      </div>
      <div
        className={cn(
          " text-white overflow-hidden transition-all bg-black/40 h-[13rem]",
          {
            "h-0": !isActive || openSideNav,
          }
        )}
      >
        <ul className={cn("mt-2 transition-all ")}>
          <li className="block px-1">
            {" "}
            <NavLink
              className={({ isActive }) =>
                cn("block px-5 py-3  rounded-lg text-white/40 pl-12 hover:text-white transition-all", {
                  "bg-primaryHover text-white ": isActive,
                })
              }
              to={"/config/periodos"}
            >
              Periodos
            </NavLink>
          </li>
          <li className="block px-1 ">
            <NavLink
              className={({ isActive }) =>
                cn("block px-5 py-3  rounded-lg text-white/40 pl-12 hover:text-white transition-all", {
                  "bg-primaryHover text-white ": isActive,
                })
              }
              to={"/config/areas"}
            >
              Areas
            </NavLink>
          </li>
          <li className="block px-1">
            <NavLink
              className={({ isActive }) =>
                cn("block rounded-lg text-white/40 px-5 py-3 pl-12 hover:text-white transition-all", {
                  "bg-primaryHover text-white ": isActive,
                })
              }
              to={"/config/competencias"}
            >
              Competencias
            </NavLink>
          </li>
          <li className="block px-1">
            <NavLink
              className={({ isActive }) =>
                cn("block rounded-lg text-white/40  px-5 py-3 pl-12 hover:text-white transition-all", {
                  "bg-primaryHover text-white ": isActive,
                })
              }
              to={"/config/niveles"}
            >
              Niveles
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
