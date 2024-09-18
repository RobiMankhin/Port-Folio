import { RiArrowGoBackFill } from "react-icons/ri";
import PropTypes from "prop-types";

const PersonalInfo = ({ setTopup }) => {
  return (
    <div className="fixed z-20 flex overflow-scroll items-center justify-center bg-slate-200 bg-opacity-95 top-0 bottom-0 right-0 left-0">
      <div className="flex p-2 mt-8 relative w-[340px] md:w-[550px] rounded-md border-gray-400 border ">
        <div className=" flex  flex-col  ">
          <div className="flex flex-col items-center ">
            <h2 className="text-xl my-2 font-semibold">Education</h2>
            <div className=" font-semibold shadow-lg bg-slate-200 p-2 rounded-lg">
              <h3>
                Bachelor of Science in Computer Science and Engineering(CSE)
              </h3>
              <h3>2018-2023</h3>
              <h3>University of Information Technology and Sciences(UITS)</h3>
            </div>
          </div>
          <div className="flex flex-col p-2 items-center">
            <h2 className="text-xl font-semibold my-2">Personal info</h2>
            <div className=" font-semibold shadow-lg bg-slate-200 p-2 rounded-lg">
              <h2>Name : Robi Mankhin</h2>
              <h2>Father&apos;s Name : Shuvro Dango</h2>
              <h2>Mother&apos;s Name: Nilotpola Mankhin</h2>
              <h3>Age : 25</h3>
              <h3>marital status : Unmarried</h3>
              <h3>Gender : male</h3>
              <h3 className="flex flex-col md:flex-row md:gap-2">
                <h3 className="">Present Address : </h3>
                <div className="flex ml-10 md:ml-0 flex-col text-sm">
                  <h4>House Name : Abdul Ali Neer</h4>
                  <h4>Holding Number : 470</h4>
                  <h4>Vatara, Badda, Notun Bazar,Dhaka-1212</h4>
                </div>
              </h3>
            </div>
          </div>
        </div>
        <button
          className=" p-1 duration-300 border border-gray-800 hover:scale-105  rounded-full absolute top-2 text-xl right-2"
          onClick={() => setTopup(false)}
        >
          <RiArrowGoBackFill />
        </button>
      </div>
    </div>
  );
};
PersonalInfo.propTypes = {
  setTopup: PropTypes.func.isRequired,
};

export default PersonalInfo;
