import React, { useEffect, useRef, useState } from 'react'

export interface ExperienceItemProps {
   idx: number
   title: string
   desc: string
   company: string
   date: string
}
const ExperienceItem = ({
   idx,
   title,
   desc,
   company,
   date,
}: ExperienceItemProps) => {
   return (
      <div className="flex justify-between h-48">
         {idx % 2 == 0 ? (
            <div className="w-1/3 ">
               {/* JOB TITLE */}
               <div className="bg-white text-black p-3 font-semibold rounded-b-lg rounded-s-lg">
                  {title}
               </div>
               {/* JOB DESC */}
               <div className="p-3 text-sm italic">{desc}</div>
               {/* JOB DATE */}
               <div className="p-3 text-red-400 text-sm font-semibold">
                  {date}
               </div>
               {/* JOB COMPANY */}
               <div className="p-1 rounded bg-white text-black text-sm font-semibold w-fit">
                  {company}
               </div>
            </div>
         ) : (
            <div className="w-1/3 "></div>
         )}
         {/* CENTER */}
         <div className="w-1/6 flex justify-center">
            {/* LINE */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
               {/* LINE CIRCLE */}
               <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
         </div>
         {idx % 2 == 0 ? (
            <div className="w-1/3 "></div>
         ) : (
            <div className="w-1/3 ">
               {/* JOB TITLE */}
               <div className="bg-white text-black p-3 font-semibold rounded-b-lg rounded-s-lg">
                  {title}
               </div>
               {/* JOB DESC */}
               <div className="p-3 text-sm italic">{desc}</div>
               {/* JOB DATE */}
               <div className="p-3 text-red-400 text-sm font-semibold">
                  {date}
               </div>
               {/* JOB COMPANY */}
               <div className="p-1 rounded bg-white text-black text-sm font-semibold w-fit">
                  {company}
               </div>
            </div>
         )}
      </div>
   )
}

export default ExperienceItem
