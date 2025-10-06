import { motion } from "framer-motion";

const ErrorTemplate = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh w-screen bg-gray-100 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 2, y: 0 }}
        transition={{ duration: 1.5, ease: "circInOut" }}
        className="flex flex-col items-center px-4"
      >
        <div className="flex justify-center items-center gap-1 mt-5">
          <h1 className="text-[100px] sm:text-[80px] max-[480px]:text-[60px] font-bold text-black m-0">
            4
          </h1>
          <h1 className="text-[100px] sm:text-[80px] max-[480px]:text-[60px] font-bold text-[#459fff] m-0">
            0
          </h1>
          <h1 className="text-[100px] sm:text-[80px] max-[480px]:text-[60px] font-bold text-black m-0">
            4
          </h1>
        </div>

        <h2 className="text-2xl sm:text-xl font-medium mt-2">Page Not Found</h2>
        <p className="text-lg sm:text-base font-normal mt-1">
          The page you are looking for might have been removed.
        </p>
      </motion.div>
    </div>
  );
};

export default ErrorTemplate;
