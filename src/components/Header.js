import { useEffect, useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState(false);
  useEffect(
    function () {
      document.documentElement.classList.toggle("dark");
    },
    [isDark]
  );

  return (
    <>
      <header className=" dark:bg-Dark-Blue  bg-White border-b-2  dark:border-transparent">
        <div className="cont h-12 max-w-7xl w-[90%] mx-auto flex py-8 justify-between items-center">
          <h1 className="text-xl  dark:text-white text-Very-Dark-Blue1 font-medium">
            Where in the world?
          </h1>
          <button
            onClick={() => setIsDark(!isDark)}
            className="dark:text-white text-Very-Dark-Blue1 flex items-center gap-2"
          >
            {isDark ? (
              <span className="h-6 w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFFFFF"
                  viewBox="0 0 256 256"
                >
                  <path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"></path>
                </svg>
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
                </svg>
              </span>
            )}
            <span>{isDark ? "Dark mode" : "Light mode"}</span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
