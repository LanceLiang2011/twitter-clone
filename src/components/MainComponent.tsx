import {
  BsThreeDots,
  BsChatHeart,
  BsHeart,
  BsBarChart,
  BsArchive,
  BsDot,
} from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";

function MainComponent() {
  return (
    <main className=" flex flex-4 h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-xl font-bold p-6 backdrop-blur bg-white/10 sticky top-0">
        Home
      </h1>
      <div className="border-y-[0.5px] px-4 flex items-stretch py-6 space-x-2 border-gray-600 relative">
        <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
        {/* input tweet */}
        <form className="flex flex-col w-full h-full">
          <input
            type="text"
            name="tweet"
            className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
            placeholder="What's happening?"
          />
          <div className="w-full justify-between items-center flex">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button className="tweet-btn w-full">Tweet</button>
            </div>
          </div>
        </form>
      </div>
      {/* Tweets */}
      <div className=" flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="border-b-[0.5px] border-gray-600 p-4 flex gap-4"
          >
            {/* avatar */}
            <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
            </div>
            {/* content */}
            <div className=" flex flex-col gap-2">
              {/* tweet metadata */}
              <div className=" flex items-center ">
                <div className=" w-full flex gap-1 text-gray-600">
                  <div className=" font-bold text-white">Lance Liang</div>
                  <div>@lancexliang</div>
                  <div>
                    <BsDot />
                  </div>
                  <div>1 hour ago</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              {/* tweet text contents */}
              <div className=" text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                minus amet possimus natus nihil in, perferendis dolor
                reiciendis! Eos saepe excepturi fuga quas aliquam? Molestias,
                provident qui ratione neque cum modi suscipit facilis, minima
                quo iusto amet illum labore aspernatur porro voluptas ipsam. In
                earum aperiam nobis ipsa doloribus sapiente.
              </div>
              {/* tweet media */}
              <div className=" bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
              {/* retweet groups */}
              <div className=" flex items-center justify-around w-full">
                <div className=" cursor-pointer rounded-full hover:bg-white/20 p-3 transition duration-200">
                  <BsChatHeart />
                </div>
                <div className=" cursor-pointer rounded-full hover:bg-white/20 p-3 transition duration-200">
                  <AiOutlineRetweet />
                </div>
                <div className=" cursor-pointer rounded-full hover:bg-white/20 p-3 transition duration-200">
                  <BsHeart />
                </div>
                <div className=" cursor-pointer rounded-full hover:bg-white/20 p-3 transition duration-200">
                  <BsBarChart />
                </div>
                <div className=" cursor-pointer rounded-full hover:bg-white/20 p-3 transition duration-200">
                  <BsArchive />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainComponent;
