import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import Logo from "../assets/img/logo1.png";

const Navbar = () => {
  const routes = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Create Post", path: "/create-post" },
    { id: "3", name: "Posts", path: "/posts" },
    { id: "4", name: "My Activities", path: "/my-activities" },
    { id: "5", name: "Profile", path: "/profile" },
  ];
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  function handleOnClickLogo() {
    navigate("/");
  }
  function handleOnClickLogout() {
    navigate("/logout");
  }
  return (
    <div className="flex flex-col justify-center w-full">
      <nav className="flex my-auto mx-5 justify-between items-center navbar md:mx-10 bg-transparent">
        <div className="flex flex-row">
          {/* <h1 className=''>slsanldg</h1> */}
          <p
            onClick={handleOnClickLogo}
            className="text-stone-400 text-2xl pl-5 font-bold cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-stone-600 "
          >
            CollabHub
          </p>
          {/* <img src={Logo} alt='logo' width={100} height={100} /> */}
          {/* <Logo />  */}
        </div>
        <div className="flex md:flex items-center">
          <ul className="flex flex-row">
            {routes.map((route) => {
              return (
                <li key={route.id} className="p-4 text-md">
                  <p
                    onClick={() => {
                      navigate(`${route.path}`);
                    }}
                    className="text-stone-400 font-semibold cursor-pointer transition ease-in-out hover:transition-out hover:scale-110 "
                  >
                    {route.name}
                  </p>
                </li>
              );
            })}

            {/* <li className="p-4 text-md">
              <a href="/create-post">Create Post</a>
            </li>
            <li className="p-4 text-md">
              <a href="/posts">Posts</a>
            </li>
            <li className="p-4 text-md">
              <a href="/my-activities">My Activities</a>
            </li>
            <li className="p-4 text-md">
              <a href="/profile">Profile</a>
            </li> */}
          </ul>
          <button
            onClick={handleOnClickLogout}
            className="w-22 h-8 p-1 ml-5 items-center border-red-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          >
            Logout
          </button>
        </div>
        <div
          className="flex md:hidden"
          onClick={() => {
            {
              setToggle((prev) => !prev);
              console.log(toggle);
            }
          }}
        >
          {!toggle ? <FiMenu /> : <FiX />}
        </div>
      </nav>
      {toggle && (
        <div className="flex md:hidden md:w-full">
          <ul className="flex flex-col w-full justify-center">
            <li className="w-full text-md flex">
              <a href="/home" className="w-full text-center">
                Home
              </a>
            </li>
            <li className="w-full text-md flex">
              <a href="/create-post" className="w-full text-center">
                Create Post
              </a>
            </li>
            <li className="w-full text-md flex ">
              <a href="/posts" className="w-full text-center">
                Posts
              </a>
            </li>
            <li className="w-full text-md flex ">
              <a href="/my-activities" className="w-full text-center">
                My Activities
              </a>
            </li>
            <li className="w-full text-md flex ">
              <a href="/profile" className="w-full text-center">
                Profile
              </a>
            </li>
            <li className="w-full text-md flex ">
              <a href="/logout" className="w-full text-center">
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
