import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.div
      className='my-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className='heading text-center text-5xl my-10 font-semibold'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        What Our Customers Say
      </motion.h1>

      <div className='container mx-auto p-3 flex flex-col md:flex-row gap-10'>
        <motion.div
          className='card1 text-center place-items-center shadow-2xl rounded-2xl h-fit cursor-pointer'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img className='w-20 rounded-full p-1 mx-auto border border-violet-600 ' src="/avtar.png" alt="" />
          <p className='p-4 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, numquam quibusdam.</p>
          <h3 className='text-violet-600 p-2 italic'>-John, CMO, Samsung</h3>
        </motion.div>

        <motion.div
          className='card2 text-center md:my-10 place-items-center  shadow-2xl md:border-2 rounded-2xl cursor-pointer border-violet-700'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img className='w-20 rounded-full p-1 mx-auto border-2 my-3 border-violet-600 ' src="/avtar.png" alt="" />
          <p className='p-4 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, numquam quibusdam.</p>
          <h3 className='text-violet-600 font-semibold p-2 italic'>-John, CEO, Apple</h3>
        </motion.div>

        <motion.div
          className='card3 text-center place-items-center shadow-2xl rounded-2xl h-fit cursor-pointer '
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img className='w-20 rounded-full mx-auto p-1 border border-violet-600 ' src="/avtar.png" alt="" />
          <p className='p-4 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, numquam quibusdam.</p>
          <h3 className='text-violet-600 p-2 italic'>-James, Marketing Director, Nividia  </h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
