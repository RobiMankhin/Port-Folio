import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

import Message from "./Message";

const Contact = () => {
  return (
    <div className="flex flex-col items-center mt-24">
      <h1 className="text-3xl font-bold mt-3">Contact</h1>
      <h2 className="md:text-lg text-gray-700 text-lg mt-2 font-semibold">
        Get in Touch
      </h2>
      <div className="flex flex-col md:flex-row gap-20 lg:gap-28 mt-4">
        <div className="flex items-center  flex-col">
          <h3 className="mb-5 text-gray-800 font-semibold">Speak with me</h3>
          <div className="flex flex-col gap-4">
            <div className="flex bg-amber-50 cursor-pointer hover:bg-gray-100 flex-col p-4 rounded-lg shadow-md items-center">
              <MdOutlineEmail size={20} />
              <h3 className="font-semibold">Email</h3>
              <h2 className="mb-3 text-sm text-gray-700">
                robileo49@gmail.Components
              </h2>
              <HiOutlineChatBubbleBottomCenterText size={18} />
            </div>
            <div className="flex bg-amber-50 cursor-pointer hover:bg-gray-100 flex-col p-4 rounded-lg shadow-md items-center">
              <FaWhatsapp size={20} />
              <h3 className="font-semibold">WhatsApp</h3>
              <h2 className="mb-3 text-sm text-gray-700">01789110227</h2>
              <HiOutlineChatBubbleBottomCenterText size={18} />
            </div>
            <div className="flex bg-amber-50 cursor-pointer hover:bg-gray-100 flex-col p-4 rounded-lg shadow-md items-center">
              <PiTelegramLogoLight size={20} />
              <h3 className="font-semibold">Telegram</h3>
              <h2 className="mb-3 text-sm text-gray-700">01789110227</h2>
              <HiOutlineChatBubbleBottomCenterText size={18} />
            </div>
          </div>
        </div>

        <Message />
      </div>
    </div>
  );
};

export default Contact;
