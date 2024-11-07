'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const items = [
   {
      id: 1,
      color: 'from-red-300 to-blue-300',
      title: '학생을 위한 문해력 향상 AI 사이트(PoC)',
      desc: 'AI(GPT & RAG)를 활용한 문해력 학습 지도 사이트 기획, 설계 및 프론트와 백엔드 개발',
      img: '/ai-1.png',
      link: '',
   },
   {
      id: 2,
      color: 'from-red-300 to-blue-300',
      title: '학생을 위한 문해력 향상 AI 사이트(PoC)',
      desc: 'AI(GPT & RAG)를 활용한 문해력 학습 지도 사이트 기획, 설계 및 프론트와 백엔드 개발',
      img: '/sep-1.png',
      link: '',
   },
]

export interface PortfolioPageProps {}

const PortfolioPage = ({}: PortfolioPageProps) => {
   const ref = useRef(null)
   const { scrollYProgress } = useScroll({ target: ref })
   const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])
   return (
      <motion.div
         className="h-full"
         initial={{ y: '-200vh' }}
         animate={{ y: '0%' }}
         transition={{ duration: 1 }}
      >
         <div className="h-[600vh] relative text-white bg-black" ref={ref}>
            <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
               My Works
            </div>
            <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
               <motion.div style={{ x }} className="flex">
                  <div className="h-screen w-screen flex items-center justify-center " />
                  {items.map((item) => (
                     <div
                        className={`h-screen w-screen flex items-center justify-center`}
                        key={item.id}
                     >
                        <div className="flex flex-col gap-8 text-white">
                           <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                              {item.title}
                           </h1>
                           <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                              <Image src={item.img} alt="" fill/>
                           </div>
                           <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                              {item.desc}
                           </p>
                           <div className="flex justify-end">
                              <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                                 자세히 보기
                              </button>
                           </div>
                        </div>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>
         <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-black text-white">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0 "
              />
            </defs>
            <text fill="#ffff">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end & Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-white text-black rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
      </motion.div>
   )
}

export default PortfolioPage
