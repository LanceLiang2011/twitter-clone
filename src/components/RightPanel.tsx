import { BsSearchHeart } from "react-icons/bs";

function RightPanel() {
  return (
    <section className=" sticky top-2 flex-3 min-w-fit overflow-y-auto mt-2 flex-col items-stretch h-[90vh] overflow-x-hidden px-6 hidden xl:flex">
      {/* Search Bar */}
      <div className=" ">
        <div className=" relative w-full h-full group ">
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
      <div className=" flex flex-col gap-1 rounded-xl bg-neutral-800/90 mt-4 pb-2">
        <h3 className=" font-bold text-xl p-4">Who to follow</h3>
        <div className="flex flex-col gap-1">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className=" w-full hover:bg-white/10 p-2 flex justify-around items-center gap-2 last:rounded-b-xl transition duration-200"
            >
              {/* avatar */}
              <div className=" w-10 h-10 bg-neutral-600 rounded-full"></div>
              {/* user info */}
              <div className="flex flex-col">
                <div className=" font-bold text-white">Some good user</div>
                <div className=" text-gray-500 text-xs">@baduser123</div>
              </div>
              {/* follow btn */}
              <button className=" rounded-full py-1 px-3 bg-white text-neutral-900 hover:bg-opacity-80">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightPanel;
