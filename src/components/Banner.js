import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaYoutube, FaDribbble, FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex item-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:items-center lg:flex-row lg:gap-x-12'>
        <div className='flex-1 text-center  font-secondary lg:text-left '>
          <motion.h1 
          variants={fadeIn('up', 0.3)}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}
           className='text-[55px] font-bold leading-p[0.8] lg:text-[110px ]'>G'anijonov <span>Azimjon</span></motion.h1>
          < motion.div
           variants={fadeIn('up', 0.4)}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]' >
            <span className=' text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Desinger',
              2000,
              'Gamer',
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />

          </ motion.div>
          <motion.p
           variants={fadeIn('up', 0.5)}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }} className=' mb-8 max-w-lg lg:mx-a'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum molestias assumenda explicabo officiis doloribus nemo provident enim fugit nesciunt aliquam!
          </motion.p>
          <motion.div
           variants={fadeIn('up', 0.6)}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.7 }}
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 ' >
            <button className='btn btn-lg'>Contact Me</button>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          <  motion.div
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://t.me/Azimjon2103'>
              <FaTelegram />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100089639352002&mibextid=ZbWKwL'>
              <FaFacebook />
            </a>
            <a href='https://www.instagram.com/aziko21_03'>
              <FaInstagram />
            </a>
          </ motion.div>
        </div>
        < motion.div
        variants={fadeIn('down', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className=' lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
          <img src={Image} />
        </ motion.div>
        <div></div>
        <div></div>
      </div>
    </div>
  </section>;
};

export default Banner;
