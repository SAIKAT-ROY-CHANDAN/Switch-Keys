import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import switchKeys from "../../assets/icons/logo.svg"
import { Button } from "../ui/button";
import MenuSvg from "../MenuSvg";
import { navigation } from "../../constants/index.ts"
import { CartSvg } from "../svgs/index.tsx";

const Header = () => {

  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };


  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link to='/' className="block w-[12rem] xl:mr-8">
          <img src={switchKeys} width={190} height={40} alt="switch" />
        </Link>

        <nav
          className={`${openNavigation ? "flex bg-white/80" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={handleClick}
                className={`block relative hover:scale-105 hover:text-sec font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>

        </nav>

        <Link to='/cart' className="mr-4 relative hidden cursor-pointer hover:text-def hover:scale-105 duration-150 lg:block">
         <CartSvg />
        </Link>

        <Link to="/dashboard" className="hidden hover:text-def hover:scale-105 duration-150 lg:flex">
          Dashboard
        </Link>

        <Button
          className="ml-auto lg:hidden"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  )
}

export default Header