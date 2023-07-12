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
        <section className=" flex-3 min-w-fit sticky top-2 overflow-y-auto mt-2 flex-col items-stretch h-[90vh] overflow-x-hidden px-6 hidden xl:flex">
          {/* Search Bar */}
          <div className=" ">
            <div className=" relative w-full h-full group">
              <input
                id="search-box"
                className=" peer w-full h-full rounded-3xl p-4 pl-10 outline-none bg-neutral-800/90 focus:border-2 focus:border-twitterblue"
                type="text"
                placeholder="Search Twitter"
              />
              <label
                htmlFor="search-box"
                className=" absolute top-0 left-3 h-full flex items-center justify-center text-gray-400 peer-focus:text-twitterblue"
              >
                <BsSearchHeart className=" w-5 h-5 " />
              </label>
            </div>
          </div>
          {/* Trending */}
          <div className=" flex flex-col gap-1 rounded-xl bg-neutral-800/90 mt-4">
            <h3 className=" font-bold text-xl p-4">What is happening</h3>
            {/* Trending list */}
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className=" hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200"
                >
                  <div className=" font-bold text-lg"># Trending {i + 1}</div>
                  <div className=" text-xs text-neutral-400">34.1k</div>
                </div>
              ))}
            </div>
          </div>
          {/* Who to follow */}
          <div></div>
        </section>
      </div>
    </div>
  );
}
