import ConversationsSidebar from "@/components/ConversationsSidebar";
import { faker } from "@faker-js/faker";
import { BsImage } from "react-icons/bs";
import { HiMiniArrowSmallRight, HiOutlineGif } from "react-icons/hi2";
import { LuSmile } from "react-icons/lu";


export default function Home() {

  return (
    <main className="flex flex-row h-[100dvh]">
      <ConversationsSidebar />


      <div className="flex flex-col w-full ">
        <div className=" flex flex-row p-4 space-x-2 border-b-2 border-gray-100 w-full px-6">
          <div className="min-h-12 min-w-12 bg-blue-500 rounded-full" />
          <div className="flex flex-col">
            <p className="text-lg font-bold text-black">{faker.person.fullName()}</p>
            <p className="text-sm text-black">@{faker.person.firstName()}</p>
          </div>
        </div>

        <div className="flex flex-col h-full overflow-scroll  space-y-2 p-4">
          <div className="flex flex-row space-x-4">
            <div className="min-h-12 min-w-12 bg-blue-500 rounded-full mt-auto mb-8 hidden sm:flex" />
            <div className="flex flex-col space-y-2 ">

              <div className="px-8 mr-auto flex flex-row p-4 space-x-2 bg-gray-200 text-black  sm:w-[60%] rounded-2xl ">
                next time youll be awake at this hour why not now
              </div>
              <div className="px-8 mr-auto flex flex-row p-4 space-x-2 bg-gray-200 text-black  sm:w-[60%] rounded-2xl ">
                {"Didn't I tell you not to put your phone on charge just because it's the weekend?"}

              </div>
              <div className="px-8 mr-auto flex flex-row p-4 space-x-2 bg-gray-200 text-black  sm:w-[60%] rounded-2xl ">
                🥺🥺🥺
              </div>
              <p className="text-xs">Sat 5:10 AM</p>

            </div>

          </div>

          <div className="px-8 ml-auto flex flex-row p-4 space-x-2 bg-green-500 text-white w-[80%] sm:w-[60%] rounded-2xl ">
            i woke up calmnnn i put it on the charger the phone was
            turned off next to me i took it out while i was sleeping hsadfkagshdfgsajf
            i slept early girl i slept at 3
          </div>

          <div className="px-8 ml-auto  flex flex-row p-4 space-x-2 bg-green-500 text-white w-[80%] sm:w-[60%]  rounded-2xl ">
            While you win in love, you continue to win in other things
            dhdhdhdh
          </div>

          <div className="px-8 ml-auto flex flex-row p-4 space-x-2 bg-green-500 text-white  rounded-2xl ">
            🔥🔥
          </div>
          <p className="text-xs ml-auto ">Sat 5:10 AM</p>

        </div>

        <div className="flex flex-row p-4 border-t-2 border-gray-100 items-center space-x-2">
          <div className="flex flex-row space-x-2 items-center">
            <BsImage className="w-6 h-6 text-green-400" />
            <HiOutlineGif className="w-7 h-7 text-green-400" />
          </div>
          <div className="flex flex-1 border-2 p-2  rounded-3xl px-4 items-center">
            <input placeholder="Type a message" className="w-full mx-2" style={{ outline: "none" }} />
            <LuSmile className="w-6 h-6 text-green-400" />
          </div>
          <HiMiniArrowSmallRight className="w-9 h-9 text-green-400" />
        </div>
      </div>
    </main >
  );
}
