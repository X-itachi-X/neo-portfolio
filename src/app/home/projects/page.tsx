import React from 'react'

const page = () => {
  return (
    <div className="flex flex-1">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex gap-2">
           
              <div className="h-15 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 ">
              <h2 className="text-xl relative z-20 md:text-4xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                {/* Welcome To my Portfolio{" "}<br/> */}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className="">My Projects</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                    <span className="">My Projects</span>
                </div>
                </div>
                </h2>
              </div>
            
          </div>
          <div className="flex gap-2 flex-1">
           
              <div
                
                className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 "
              >
                
              </div>
           
          </div>
        </div>
    </div>
  )
}

export default page