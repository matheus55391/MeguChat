import { faker } from "@faker-js/faker";
import { BsImage } from "react-icons/bs";
import { HiOutlineGif, HiMiniArrowSmallRight } from "react-icons/hi2";
import { LuSmile } from "react-icons/lu";


const ChatInput: React.FC = () => {
    return (
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
    );
}

export default ChatInput;
