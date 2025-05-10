import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <div className='my-20'>
      <motion.h1
        className='heading text-center text-5xl my-10 font-semibold'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How it Works
      </motion.h1>

      <div className='container mx-auto flex flex-col md:flex-row gap-10 items-center justify-center'>
        <motion.div
          className='upload text-center rounded-2xl shadow-2xl w-[90%] md:w-[20%] flex flex-col justify-center items-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <img className='w-16 my-2' src='/upload.svg' alt='' />
          </div>
          <div>
            <h2 className='text-xl font-bold'>Upload Licence</h2>
            <p className='p-4 text-lg'>Get started by uploading your license</p>
          </div>
        </motion.div>

        <motion.div
          className='valuation w-[90%] md:w-[20%] rounded-2xl shadow-2xl text-center flex flex-col justify-center items-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <img className='w-16 my-2' src='/valuation.svg' alt='' />
          </div>
          <div>
            <h2 className='text-xl font-bold'>Get Valuation</h2>
            <p className='p-4 text-lg'>Get an Instant valuation and data protection</p>
          </div>
        </motion.div>

        <motion.div
          className='bestprice w-[90%] md:w-[20%] text-center rounded-2xl shadow-2xl flex flex-col justify-center items-center'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <img className='w-16 my-2' src='/bank.svg' alt='' />
          </div>
          <div>
            <h2 className='text-xl font-bold'>Get Paid</h2>
            <p className='p-4 text-lg'>Instant Payouts for Every License Sold</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className='my-15 w-full md:w-1/2 mx-auto shadow-xl rounded-xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className='my-5 p-6'>
          <b>Upload Your License -</b>
          <p className=' text-sm text-gray-700'>
            Start by submitting your license details through our easy-to-use online form.
            Whether you're looking to offload enterprise software, antivirus packages, or
            design tools, our system is built to handle a wide range of license types. We
            ensure that all your submissions are protected by end-to-end encryption, so
            your data is kept safe and confidential at every step.
          </p>
        </div>

        <div className='my-3 p-6'>
          <b>Get an Instant, Transparent Valuation -</b>
          <p className=' text-sm text-gray-700'>
            Once you submit your license, our smart valuation engine steps in. It analyzes
            key factors such as the software's brand, license validity, remaining
            duration, current market demand, and resale potential. Within moments, you'll
            receive a fair and transparent valuation — no negotiations, no vague
            estimates. What you see is exactly what you'll get, with zero hidden fees.
          </p>
        </div>

        <div className='my-3 p-6'>
          <b>Get Paid Quickly and Securely -</b>
          <p className=' text-sm text-gray-700'>
            Happy with the offer? Simply accept it and provide your preferred payout method
            — whether it’s bank transfer, UPI, PayPal, or another trusted method. Our team
            handles all the logistics, ensuring a smooth license transfer and immediate
            payment. Most transactions are completed within 24 to 48 hours, making it one
            of the fastest and most reliable ways to unlock value from software you no
            longer need.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
