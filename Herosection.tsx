"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./Ui/Lamp";

export function LampDemo() {
  return (
    <LampContainer className="
     h-auto md:h-[40rem] w-full overflow-hidden z-0 relative rounded-md 
      flex flex-col items-center justify-center gap-y-10 text-center
       text-zinc-50 drop-shadow-lg shadow-xl
    ">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.10,
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="mt-10 flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
       I AM  <span className="ml-9 font-mono animate-pulse duration-500 bg-gradient-to-r from-fuchsia-600 via-red-500 to-purple-600 bg-clip-text text-transparent">SURYA !! </span> <br />

     
        
      </motion.h1>

       <button className=" font-mono bg-grandient-to-r from-gray-950 via-blue-600 to-gray-950 hover:bg-gradient-to-l  from-gray-300 text-2xl border-solid border-2 border-black px-2 rounded-md mt-8" onClick={() => alert("coming soon")} type="button"> Explore <span className="animate-pulse duration-500 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent" >More</span>  </button>
    </LampContainer>
  );
}
