import Works from "./Works";

const PortFolio = () => {
  return (
    <div className="flex flex-col items-center mt-16 md:mt-24 lg:mt-36">
      <div className=" flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mt-3">PortFolio</h1>
        <h2 className="md:text-2xl dark:text-darkText text-gray-700 text-lg mt-3 font-semibold">
          My Works
        </h2>
      </div>
      <div>
        <Works />
      </div>
    </div>
  );
};

export default PortFolio;
