'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
   return (
      <motion.div
         className="h-full"
         initial={{ y: '-200vh' }}
         animate={{ y: '0%' }}
         transition={{ duration: 1 }}
      >
         <div className="h-full flex flex-col lg:gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 lg:h-full lg:w-1/2 relative">
               <Image src="/hero.png" alt="" fill className="object-contain" />
            </div>
            {/* TEXT CONTAINER */}
            <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
               {/* TITLE */}
               <h1 className="text-4xl md:text-6xl font-bold">
                  생각을 디자인하고 기술로 만들어 냅니다.
               </h1>
               {/* DESC */}
               <p className="md:text-xl">
                  저의 홈페이지에 오신걸 환영합니다. 저는 개발자로서 탄탄한
                  기본기를 바탕으로, 새로운 기술 트렌드에 빠르게 적응하며
                  성장하고 있습니다. 또한 끊임없는 학습을 통해 더 나은 개발자가
                  되기 위해 노력합니다.
               </p>
               {/* BUTTONS */}
               <div className="w-full flex gap-4">
                  <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                     View My Work
                  </button>
                  <button className="p-4 rounded-lg ring-1 ring-black">
                     Contact Me
                  </button>
               </div>
            </div>
         </div>
      </motion.div>
   )
}
