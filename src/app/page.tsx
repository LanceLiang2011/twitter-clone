import Link from "next/link";
import { BiSolidHomeHeart, BiUser } from "react-icons/bi";
import {
  BsTwitter,
  BsSearchHeart,
  BsBell,
  BsEnvelopeHeart,
  BsBookmarkHeart,
  BsThreeDots,
} from "react-icons/bs";

const NAV_ITEMS = [
  { title: "home", icon: BiSolidHomeHeart },
  { title: "explore", icon: BsSearchHeart },
  { title: "notifications", icon: BsBell },
  { title: "messages", icon: BsEnvelopeHeart },
  { title: "bookmarks", icon: BsBookmarkHeart },
  { title: "profile", icon: BiUser },
];

export default function Home() {
  return (
    <div className=" w-full h-full flex justify-center items-center relative bg-gray-950 text-white">
      <div className=" max-w-screen-xl w-full h-full flex relative ">
        {/* Side Bar */}
        <section className=" fixed w-72 flex flex-col items-stretch h-screen">
          <div className=" h-full flex flex-col items-stretch mt-4 gap-2">
            <Link href={`/`} className=" my-4 px-6">
              <BsTwitter size={24} />
            </Link>
            {NAV_ITEMS.map((item) => (
              <Link
                className=" text-2xl self-start rounded-full px-6 py-4 flex items-center justify-center gap-4 transition duration-200 hover:bg-white/20"
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon size={22} />
                </div>
                <div className=" capitalize">{item.title}</div>
              </Link>
            ))}
            <button className=" mt-2 w-full rounded-full bg-twitterblue text-white px-6 py-4 text-2xl font-bold text-center transition duration-200 hover:bg-opacity-90">
              Tweet
            </button>
          </div>
          {/* Bottom */}
          <button className=" flex items-center gap-2 mt-2 w-full rounded-full bg-twitterblue text-white px-6 py-4 text-2xl font-bold text-center transition duration-200 hover:bg-opacity-90">
            {/* author icon */}
            <div className=" rounded-full bg-slate-400 w-8 h-8"></div>
            {/* User info */}
            <div className="">
              {/* User name */}
              <div></div>
              <div></div>
            </div>
            {/* 3 dots btn */}
            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>
        {/* Home timeline */}
        <main></main>
        {/* Right panel */}
        <section></section>
      </div>
    </div>
  );
}
