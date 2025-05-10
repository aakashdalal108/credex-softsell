import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className='bg-[#b0d4fd] p-3 space-y-10'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className='flex justify-between items-center'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='text-3xl font-bold md:px-18 text-[#2a425d]'>SoftSell</h1>
        <button className='mx-5 font-semibold cursor-pointer hover:text-lg hover:underline hover:text-[#2cad79]'>
          Login
        </button>
      </motion.div>

      <div className='container flex mx-auto '>
        <motion.div
          className='w-full  text-center my-auto'
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl  font-bold text-[#2e5683] mb-4">
            Sell Unused<br /> Licenses Easily
          </h1>
          <p className="text-lg mb-6">
            Turn your unused licence into cash in just a few clicks.
          </p>
          <motion.button
            className="bg-[#2cad79] text-white px-6 py-2 rounded-md hover:bg-[#245340] cursor-pointer transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sell My Licence
          </motion.button>
        </motion.div>

        <motion.div
          className='w-full '
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img className='w-100' src="/avtar.png" alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
