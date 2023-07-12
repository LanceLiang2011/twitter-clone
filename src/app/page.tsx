import MainComponent from "@/components/MainComponent";
import SideBar from "@/components/SideBar";

import { BsSearchHeart } from "react-icons/bs";

export default function Home() {
  return (
    <div className=" w-full h-full flex justify-center items-center relative bg-gray-950 text-white">
      <div className=" max-w-screen-xl w-full h-full flex relative">
        {/* Side Bar */}
        <SideBar />
        {/* Home timeline */}
        <MainComponent />
        {/* Right panel */}
        <section className=" w-full sticky top-2 overflow-y-auto mt-2 flex-col items-stretch h-[90vh] overflow-x-hidden px-6 hidden xl:flex">
          {/* Search Bar */}
          <div>
            <div className=" relative w-full h-full">
              <label
                htmlFor="search-box"
                className=" absolute top-0 left-0 h-full flex items-center justify-center"
              >
                <BsSearchHeart className=" w-5 h-5 text-gray-500" />
              </label>
              <input
                id="search-box"
                className=" w-full h-full rounded-xl p-4 pl-8 outline-none border-none bg-transparent"
                type="text"
                placeholder="Search Twitter"
              />
            </div>
          </div>
          {/* Trending */}
          <div></div>
          {/* Who to follow */}
          <div></div>
        </section>
      </div>
    </div>
  );
}
