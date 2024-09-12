import React from 'react'
import s from "./Rate.module.css"
import RateBox from '../RateBox/RateBox'
import { motion } from 'framer-motion';




const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3, // Delay between each testimonial animation
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

function Rate() {
  return (
    <>
    <div className={s.rateMainBox}>
        <h1 className={s.rateText}>რას ამბობენ პაციენტები ჩვენზე</h1>
        <div className={s.rateBoxes}>
        <motion.div
          className="testimonial"
          variants={itemVariants}
        >
            <RateBox/>
            <RateBox/>
            <RateBox/>
          </motion.div>
        </div>
    </div>
    </>
  )
}

export default Rate