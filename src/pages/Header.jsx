import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({showNavigationLinks}) => {
  const [state, setState] = useState({
    searchPopUp: false,
    hamburger: true,
  });

  const { user,isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const toggleHamburger = () => {
    setState((prevState) => ({
      ...prevState,
      hamburger: !prevState.hamburger,
    }));
  };
  console.log(state.hamburger);

  return (
    <>
      <div className="bg-[#2b2d42] h-12 flex justify-between px-3 items-center sm:h-14">
        <div className="text-white font-mono font-semibold text-2xl cursor-pointer">
          <div>Nuesy Blog's</div>
        </div>
        {showNavigationLinks ? (
            <div className="flex gap-8 text-base hidden text-white cursor-pointer md:hidden sm:hidden lg:flex">
            <div>Sports</div>
            <div>Health</div>
            <div>Political</div>
            <div>Business</div>
            <div>Finance</div>
            <div>Life</div>
            <div>Entertainment</div>
            </div>
        ):(
          <div className="text-2xl text-white font-mono">Dashboard</div>
        )}
        <div className="flex text-white gap-4 hidden lg:flex cursor-pointer">
          <div className="pt-1 text-xl">
            <CiSearch />
          </div>
          <div>|</div>
          {isAuthenticated && (<div>{user.name}</div>)}
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <div>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </div>
          )}
          {/* <div>Register</div> */}
        </div>

        {/* for smaller screen starts */}
        <div className="flex gap-7 lg:hidden">
          <div>
            <input type="text" />
          </div>
          <div className="pt-1 text-2xl text-white">
            <CiSearch />
          </div>
          <div className="flex text-white text-2xl sm:text-3xl lg:">
            {state.hamburger ? (
              <div>
                <GiHamburgerMenu onClick={toggleHamburger} />
              </div>
            ) : (
              <div>
                <RxCross2 onClick={toggleHamburger} />
              </div>
            )}
          </div>
        </div>
        {/* for smaller screen ends */}
      </div>
      {!state.hamburger && (
        <div className="flex justify-end">
          <div className="bg-[#2b2d42] text-xl text-white font-mono space-y-5 pl-4 py-5 flex flex-col items-start w-1/2 sm:space-y-3 sm:w-1/3 md:space-y-6 md:py-10">
            <div>Sports</div>
            <div>Health</div>
            <div>Political</div>
            <div>Business</div>
            <div>Finance</div>
            <div>Life</div>
            <div>Entertainment</div>
            <div>Login</div>
            <div>Register</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
