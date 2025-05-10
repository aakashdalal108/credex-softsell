import React from 'react';
import { motion } from 'framer-motion';

const ChooseUS = () => {
  const features = [
    {
      icon: '/price.svg',
      title: 'Total Control',
      text: 'Set your own pricing, usage rights, and licensing conditions.',
    },
    {
      icon: '/payout.svg',
      title: 'Fast Payouts',
      text: 'Quickly receive payments directly to your account.',
    },
    {
      icon: '/secure.svg',
      title: 'Safe & Secure',
      text: 'We ensure that all your transactions are safe and secure',
    },
  ];

  return (
    <div className="my-20 bg-white  ">
      <motion.h1
        className="text-center text-5xl my-10 font-semibold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Us
      </motion.h1>

      <div className="container mx-auto flex flex-col md:flex-row gap-10 items-center justify-center">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="text-center bg-white  rounded-2xl shadow-2xl w-[90%] md:w-[20%] p-5 flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img className="w-20 my-2" src={item.icon} alt={item.title} />
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-sm px-4">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="my-10 text-center text-sm text-gray-700  w-full md:w-1/2 mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className='p-4'>
          We combine speed, security, and simplicity to give individuals and
          businesses a seamless way to monetize unused digital assets. With
          SoftSell, you're not just selling a license — you're gaining value,
          minimizing waste, and making smarter tech decisions.
        </p>
      </motion.div>
    </div>
  );
};

export default ChooseUS;
