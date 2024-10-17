"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export interface AboutPageProps {}

const AboutPage = ({}: AboutPageProps) => {
   return (
      <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      >
         {/* CONTAINER */}
         {/* BIOGRAPHY CONTAINER */}
         {/* SKILLS CONTAINER */}
         {/* EXPERIENCE LIST */}
      </motion.div>
   )
}

export default AboutPage
