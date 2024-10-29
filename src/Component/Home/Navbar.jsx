import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  return (
    <div className=" ">
      <div className="bg-gray-800 h-[8rem]  flex justify-between items-center shadow-2xl ">
        <img
          className=" bg-white w-[4rem] h-[4rem] rounded-full border-2 border-blue-300 mx-5"
          src="../../../src/assets/download-removebg-preview.png"
          alt=""
        />

        <div className=" md:hidden text-3xl absolute right-0 mx-5 text-black">
          <button onClick={() => setisopen(!isopen)}>
            {isopen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav>
          <ul
            className=" md:flex text-white gap-6 text-xl mx-5 cursor-pointer hidden shadow-lg items-center
                md:static absolute w-full left-0 md:w-auto ease-in duration-500 md:opacity-100 
                opacity-0 top-[-400px] transition-all md:py-0 py-4 pl-4 rounded-lg "
          >
            <li className=" z-10 hover:text-purple-500/70 md:z-auto">Home</li>
            <li className=" z-10 hover:text-purple-500/70 md:z-auto">About</li>
            <li className=" z-10 hover:text-purple-500/70 md:z-auto">
              Qualifications
            </li>
            <li className=" z-10 hover:text-purple-500/70 md:z-auto">Contact</li>
            <li className=" z-10 hover:text-purple-500/70 md:z-auto">Blog</li>
            <button className=" bg-cyan-400 text-white font-[system-ui] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
              Get started
            </button>
          </ul>
          <div>
            
            <input type="search" name="" id="" 
            className="bg-transparent border-gray-50/30 border-2 w-[18rem] 
            h-[2rem] absolute right-0 mr-8 mt-2 outline-none rounded-xl text-gray-50/80"   />
         
          </div>
        </nav>
      </div>

      {isopen && (
         <ul
         className="flex-col md:items-center z-[-1] md:z-auto md:static bg-cyan-50 
             md:py-0 py-4 w-[16rem] pl-[5rem]  top-[-400px] transition-all ease-in
              duration-500 shadow-lg md:hidden"
       >
         <li className=" z-10 hover:text-blue-500 my-4 text-xl ">Home</li>
         <li className=" z-10 hover:text-blue-500 my-4 text-xl ">About</li>
         <li className=" z-10 hover:text-blue-500 my-4 text-xl ">
           Qualifications
         </li>
         <li className=" z-10 hover:text-blue-500 my-4 text-xl ">Contact</li>
         <li className=" z-10 hover:text-blue-500 my-4 text-xl ">Blog</li>
         <button className=" bg-cyan-400 text-white font-[system-ui] duration-500 px-4 py-2 mx-0 hover:bg-cyan-500 rounded">
           Get started
         </button>
       </ul>
      )}

     
    </div>
  );
};

export default Navbar;
