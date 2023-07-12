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
  { title: "", icon: BsTwitter },
  { title: "home", icon: BiSolidHomeHeart },
  { title: "explore", icon: BsSearchHeart },
  { title: "notifications", icon: BsBell },
  { title: "messages", icon: BsEnvelopeHeart },
  { title: "bookmarks", icon: BsBookmarkHeart },
  { title: "profile", icon: BiUser },
];

function SideBar() {
  return (
    <section className=" flex-2 mr-4 sticky top-0 flex-col items-stretch h-screen hidden xl:flex">
      <div className=" h-full flex flex-col items-stretch mt-4 gap-4">
        {/* <Link href={`/`} className=" my-4 px-6">
      <BsTwitter size={24} />
    </Link> */}
        {NAV_ITEMS.map((item) => (
          <Link
            className=" text-2xl self-start rounded-full p-4 flex items-center justify-center gap-4 transition duration-200 hover:bg-white/20"
            href={`/${item.title.toLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon size={22} />
            </div>
            <div className=" capitalize">
              {item.title !== "/" && item.title}
            </div>
          </Link>
        ))}
        <button className=" mt-2 w-full tweet-btn">Tweet</button>
      </div>
      {/* Bottom */}
      <button className=" flex items-center gap-2 mt-2 w-full rounded-full bg-transparent text-white px-6 py-4 text-sm font-bold text-center transition duration-200 hover:bg-white/20">
        {/* author icon */}
        <div className=" rounded-full bg-slate-400 w-8 h-8"></div>
        {/* User info */}
        <div className="text-left text-xs">
          {/* User name */}
          <div className=" font-semibold text-sm">Lance Liang</div>
          {/* User @id */}
          <div className="">@lancexliang</div>
        </div>
        {/* 3 dots btn */}
        <div className=" ml-auto text-2xl">
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
}

export default SideBar;
