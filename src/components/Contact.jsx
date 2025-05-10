import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className='mt-21 bg-[#b0d4fd] place-items-center p-6'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className='text-center text-5xl mt-10 my-10 font-semibold'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h1>

      <motion.form
        className="max-w-xl mx-auto flex flex-col gap-4 justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <input className="p-3 rounded bg-white" placeholder="Name" required name="name" />
        <input className="p-3 rounded bg-white" placeholder="Email" type='email' required name="email" />
        <input className="p-3 rounded bg-white" placeholder="Company" required name="company" />
        <select className="p-3 rounded bg-white" required name="license">
          <option value="">Select License Type</option>
          <option>Enterprise</option>
          <option>Manufactuer</option>
          <option>Antivirus</option>
        </select>
        <textarea className="p-3 border rounded bg-white" required placeholder="Message" name="message" />
        <motion.button
          className="bg-[#2cad79] rounded-full mx-auto text-white py-3 px-6 w-1/2 cursor-pointer hover:bg-[#245340]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
