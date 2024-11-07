'use client'
import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Image from 'next/image'
import ExperienceItem from '../components/ExperienceItem'
import Brain from '../components/Brain'

export interface AboutPageProps {}

const skillList: string[] = [
   'JavaScript',
   'TypeScript',
   'React.js',
   'Next.js',
   'Vue.js',
   'Node.js',
   'Nest.js',
   'Express.js',
   'SCSS',
   'Tailwind CSS',
   'MySQL',
   'PostgreSQL',
   'MongoDB',
   'Framer Motion',
   'Docker',
   'Git',
]

type expreince = {
   title: string
   desc: string
   company: string
   date: string
}

const expreinceList: expreince[] = [
   {
      title: '풀스택 개발자',
      desc: '블라블라',
      date: '2022.08 ~ 2024.08',
      company: 'TecAceGX',
   },
   {
      title: '프로젝트 매니저',
      desc: '블라블라',
      date: '2022.08 ~ 2024.08',
      company: '제네럴 이노베이션즈',
   },
   {
      title: '선임 연구원',
      desc: '블라블라',
      date: '2022.08 ~ 2024.08',
      company: '명지대학교 산학협력단',
   },
]

const AboutPage = ({}: AboutPageProps) => {
   const containerRef = useRef(null)
   const skillRef = useRef(null)
   const experienceRef = useRef(null)
   const { scrollYProgress } = useScroll({ container: containerRef })
   const isSkillRefInView = useInView(skillRef, { margin: '-100px' })
   const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' })

   return (
      <motion.div
         className="h-full"
         initial={{ y: '-200vh' }}
         animate={{ y: '0%' }}
         transition={{ duration: 1 }}
      >
         {/* CONTAINERS */}
         <div className="h-full overflow-scroll lg:flex text-white" ref={containerRef}>
            <div className="flex flex-col p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 gap-24 md:gap-32 lg:gap-48 zl:gap-64">
               {/* BIOGRAPHY CONTAINER */}
               <div className="flex flex-col gap-12 justify-center">
                  {/* BIOGRAPHY IMAGE */}
                  <Image
                     src="/hero2.jpeg"
                     alt=""
                     width={112}
                     height={112}
                     className="w-28 h-28 rounded-full object-cover"
                  ></Image>
                  {/* BIOGRAPHY TITLE */}
                  <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                  {/* BIOGRAPHY DESC */}
                  <p className="text-lg">블라블라블발블라</p>
                  {/* BIOGRAPHY QUQTE */}
                  <span className="italic">블라블라블발블라</span>
                  {/* BIOGRAPHY SIGN SVG*/}
                  {/* BIOGRAPHY SCROLL SVG */}
                  <motion.svg
                     initial={{ opacity: 0.2, y: 0 }}
                     animate={{ opacity: 1, y: '10px' }}
                     transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: 'easeInOut',
                     }}
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     width={50}
                     height={50}
                  >
                     <path
                        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                        stroke="#ffff"
                        strokeWidth="1"
                     ></path>
                     <path d="M12 6V14" stroke="#ffff" strokeWidth="1"></path>
                     <path
                        d="M15 11L12 14L9 11"
                        stroke="#ffff"
                        strokeWidth="1"
                     ></path>
                  </motion.svg>
               </div>
               {/* SKILLS CONTAINER */}
               <div
                  className="flex flex-col gap-12 justify-center"
                  ref={skillRef}
               >
                  {/* SKILL TITLE */}
                  <motion.h1
                     initial={{ x: '-300px' }}
                     animate={isSkillRefInView ? { x: 0 } : {}}
                     transition={{ delay: 0.2 }}
                     className="font-bold text-2xl"
                  >
                     SKILLS
                  </motion.h1>
                  {/* SKILL LIST */}
                  <motion.div
                     initial={{ x: '-300px' }}
                     animate={isSkillRefInView ? { x: 0 } : {}}
                     className="flex gap-4 flex-wrap"
                  >
                     {skillList.map((item) => (
                        <div
                           key={item}
                           className="rounded  p-2 text-sm cursor-pointer bg-gray-600 text-white hover:bg-white hover:text-black"
                        >
                           {item}
                        </div>
                     ))}
                  </motion.div>
                  <motion.svg
                     initial={{ opacity: 0.2, y: 0 }}
                     animate={{ opacity: 1, y: '10px' }}
                     transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: 'easeInOut',
                     }}
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     width={50}
                     height={50}
                  >
                     <path
                        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                     ></path>
                     <path d="M12 6V14" stroke="#FFFFFF" strokeWidth="1"></path>
                     <path
                        d="M15 11L12 14L9 11"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                     ></path>
                  </motion.svg>
               </div>
               {/* EXPERIENCE CONTAINER */}
               <div
                  className="flex flex-col gap-12 justify-center pb-48"
                  ref={experienceRef}
               >
                  {/* EXPERIENCE TITLE */}
                  <motion.h1
                     initial={{ x: '-300px' }}
                     animate={isExperienceRefInView ? { x: '0' } : {}}
                     transition={{ delay: 0.2 }}
                     className="font-bold text-2xl"
                  >
                     EXPERIENCE
                  </motion.h1>
                  {/* EXPERIENCE LIST */}
                  <motion.div
                     initial={{ x: '-300px' }}
                     animate={isExperienceRefInView ? { x: '0' } : {}}
                     className=""
                  >
                     {expreinceList.map((item, idx) => (
                        <ExperienceItem
                           idx={idx}
                           title={item.title}
                           desc={item.desc}
                           date={item.date}
                           company={item.company}
                           key={item.company}
                        />
                     ))}
                  </motion.div>
               </div>
            </div>
            <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
               <Brain scrollYProgress={scrollYProgress} />
            </div>
         </div>
      </motion.div>
   )
}

export default AboutPage
