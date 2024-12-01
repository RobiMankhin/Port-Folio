import { Projects } from "./Data";
import { IoIosArrowForward } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const Works = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        navigation={true}
        // autoplay={{ delay: 4000 }}
        className=" mt-4 shadow-2xl border duration-300 hover:scale-105 border-y-gray-400 rounded-md h-[350px] md:h-[450px] lg:h-[475px] w-[340px] md:w-[700px] lg:w-[800px]  "
      >
        {Projects?.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex mt-4 flex-col items-center  rounded-lg gap-5"
          >
            <div className=" md:w-[540px] lg:w-[580px] w-[270px]">
              <img className="rounded-lg" src={item.Image} alt={item.title} />
            </div>
            <h3 className="text-lg md:text-2xl font-semibold">{item.title}</h3>
            <div className="flex gap gap-10">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-zinc-100 items-center dark:hover:text-gray-400  dark:text-darkText dark:bg-darkBackground shadow-lg shadow-gray-400 px-2 hover:text-gray-700  rounded-lg cursor-pointer text-base font-semibold"
              >
                <span>Demo</span>
                <IoPlayCircleOutline className="mt-" size={15} />
              </a>
              <a
                href={item.git}
                target="_blank"
                rel="noopener noreferrer"
                className="flex dark:hover:text-gray-400  dark:text-darkText dark:bg-darkBackground bg-zinc-100  items-center shadow-lg shadow-gray-400 px-2  hover:text-gray-700 rounded-lg cursor-pointer text-base font-semibold"
              >
                <span>Code</span>
                <IoIosArrowForward className="" size={15} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Works;
