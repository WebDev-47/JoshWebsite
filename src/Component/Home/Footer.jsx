import React from "react";
import { FaFacebook, FaSquareTwitter, FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-200">
        <div className="container mx-auto py-12 px-6">
          <div className=" grid md:grid-cols-10 grid-cols-1 gap-7">
            <div className=" lg:col-span-3 col-span-12">
              <a href="">
                <img
                  className="  h-[3rem] w-[3rem] rounded-full border-2 border-blue-400 "
                  src="../../../src/assets/download-removebg-preview.png"
                  alt=""
                />
              </a>
              <p className=" mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto libero illo dolor ipsum, iusto deleniti! Nemo enim
                ullam perspiciatis deserunt.
              </p>
              <div className=" flex gap-5 py-5 hover:bg-gray-50/90">
                <FaFacebook size={24} />
                <FaSquareTwitter size={24} />
                <CiLinkedin size={24} />
                <FaInstagram size={24} />
              </div>
            </div>

            <div className=" lg:col-span-2 md:col-span-4 col-span-12">
              <h5 className=" tracking-wide text-gray-100 font-semibold">
                Company
              </h5>
              <ul className=" list-none mt-6 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-400 transition-all duration-500 ease-in"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-gray-400 transition-all duration-500 ease-in"
                  >
                    About us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-gray-400 transition-all duration-500 ease-in"
                  >
                    Experience
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-gray-400 transition-all duration-500 ease-in"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-gray-400 transition-all duration-500 ease-in"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className=" lg:col-span-3 md:col-span-4 col-span-12">
              <h5 className="tracking-wide text-gray-100 font-semibold">
                Important Links
              </h5>
              <ul className="list-none space-y-2 mt-6">
                <li>
                  <a
                    href=""
                    className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                  >
                    Terms of Services
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                  >
                    Terms of Services
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div className=" lg:col-span-2 md:col-span-4 col-span-12">
              <h5 className=" tracking-wide text-gray-100 font-semibold">
                <p className="">
                  Sign up and receive the latest tips via email.
                </p>
                <form action="">
                  <div className=" my-3">
                    <label htmlFor="email-input">
                      Write your email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email-input"
                      className="mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none
                    border border-gray-500 focus:border-[#ffcda3] focus:ring-0"
                      placeholder="name@example.com"
                    />
                  </div>
                  <input
                    type="Submit"
                    className=" py-2 px-5 tracking-wide border duration-500 text-base
                 text-center bg-[#ffcda3] hover:bg-[#ffcd88] border-[#ffcda3]
                  hover:border-[#ffcd88] text-black rounded-md w-full"
                  />
                </form>
              </h5>
            </div>
          </div>
        </div>
      </footer>
      <div className="border-t border-slate-700 bg-gray-900">
        <div
          className="md:text-left text-center container
        mx-auto py-7 px-6 text-gray-200"
        >
          <p className="mb-0 justify-center flex">
            &copy;
            <script>document.write(new Date().getFullYear());</script>
            TailwindSnippets team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
