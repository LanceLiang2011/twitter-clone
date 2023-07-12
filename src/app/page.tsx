import MainComponent from "@/components/MainComponent";
import RightPanel from "@/components/RightPanel";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className=" w-full h-full flex justify-center items-center relative bg-gray-950 text-white">
      <div className=" max-w-screen-xl w-full h-full flex relative">
        {/* Side Bar */}
        <SideBar />
        {/* Home timeline */}
        <MainComponent />
        {/* Right panel */}
        <RightPanel />
      </div>
    </div>
  );
}
