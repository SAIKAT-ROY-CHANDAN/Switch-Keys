import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import MenuSvg from "../MenuSvg";
import { navigation } from "../../constants/index.ts"
import { CartSvg, SwitchKeysLogo } from "../svgs/index.tsx";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  const getTextColor = () => {
    return location.pathname === '/' && !isScrolled ? 'text-white' : 'text-black';
  };


  return (
    <div
      className={`z-50 top-0 left-0 fixed mx-auto w-full transition-transform duration-300 ${isScrolled ? 'bg-slate-50 shadow-lg' : 'bg-transparent'
        } ${getTextColor()}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link to='/' className="block w-[12rem] xl:mr-8 z-50">
          <SwitchKeysLogo />
        </Link>

        <nav
          className={`${openNavigation ? "flex bg-black/80" : "hidden"
            } fixed inset-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center mx-auto lg:flex-row">
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

        <div className="flex">
          <Link to='/cart' className="mr-4 relative hidden cursor-pointer hover:text-def hover:scale-105 duration-150 lg:block">
            <CartSvg />
          </Link>

          <Link to="/dashboard" className="hidden hover:text-def hover:scale-105 duration-150 lg:flex">
            Dashboard
          </Link>
        </div>

        <Button
          className="ml-auto lg:hidden z-50"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  )
}

export default Header