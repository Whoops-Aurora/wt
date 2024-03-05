import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who are we ..?</p>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Fete is a student-led social organization, founded by Hrishika Babar and Faheem Dehalvi. Dedicated to fostering a sense of community, Fete serves as a platform where students can engage, explore, socialise collaborate, step out of their comfort zones, and express themselves
        <br />
        <br />
        At Fete, we pride ourselves on providing a platform for students to host their own social events, while also curating exclusive events for the city of Hubli and Dharwad. Our commitment extends to making sure every diverse interest has a club they can join at fete
        <br />
        <br />
        Join Fete as we strive to create an inclusive and empowering space for students to thrive socially, professionally, and creatively. Remember the real growth happens when everyone is growing
      </motion.p>
      <br />
      <br />
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Features</h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
