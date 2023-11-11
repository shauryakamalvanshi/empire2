import React from 'react'

const Phases = (params) => {
  return (
    <div>
    <div className="flex items-center justify-center mr-56 ">

    </div>
            <div className="flex items-center justify-center ml-auto mr-auto ">
           
      <ul
        aria-label="Activity feed"
        role="feed"
        className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
      >
       <h1 className='text-xl font-bold items-center'>Phases of our development</h1>
        <li role="article" className="relative pl-6">
        <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
              <img src="./strategy.png" alt="Location Icon" className="w-6 h-6" />
            </span>
          <div className="flex flex-col flex-1 gap-0">
            <h4 className="text-lg font-medium text-slate-700">
              {" "}
              {params.title1}{" "}
            </h4>
            <p className="text-xs text-slate-500">13:12pm</p>
          </div>
        </li>
        <li role="article" className="relative pl-6">
        <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
              <img src="./ux.png" alt="Location Icon" className="w-6 h-6" />
            </span>
          <div className="flex flex-col flex-1 gap-0">
            <h4 className="text-lg font-medium text-slate-700">
              {" "}
              {params.title2}
            </h4>
            <p className="text-xs text-slate-500">13:31pm</p>
          </div>
        </li>
        <li role="article" className="relative pl-6">
        <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
              <img src="./project.png" alt="Location Icon" className="w-6 h-6" />
            </span>
          <div className="flex flex-col flex-1 gap-0">
            <h4 className="text-lg font-medium text-slate-700">
              {" "}
             {params.title3}{" "}
            </h4>
            <p className="text-xs text-slate-500">13:32pm</p>
          </div>
        </li>
        <li role="article" className="relative pl-6">
        <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
              <img src="./location.png" alt="Location Icon" className="w-6 h-6" />
            </span>
          <div className="flex flex-col flex-1 gap-0">
            <h4 className="text-lg font-medium text-slate-700">
              {" "}
              {params.title4}{" "}
            </h4>
            <p className="text-xs text-slate-500">13:56pm</p>
          </div>
        </li>
        <li role="article" className="relative pl-6">
        <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
              <img src="./website.png" alt="Location Icon" className="w-10 h-10" />
            </span>
          <div className="flex flex-col flex-1 gap-0">
            <h4 className="text-lg font-medium text-slate-700">
              {" "}
              {params.title5}{" "}
            </h4>
            <p className="text-xs text-slate-500">13:32pm</p>
          </div>
        </li>
        <li role="article" className="relative pl-6">
        <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-slate-200 text-slate-700 ring-2 ring-white ">
              <img src="./rocket.png" alt="Location Icon" className="w-10 h-10" />
            </span>
          <div className="flex flex-col flex-1 gap-0">
            <h4 className="text-lg font-medium text-slate-700">
              {" "}
             {params.title6}{" "}
            </h4>
            <p className="text-xs text-slate-500">13:32pm</p>
          </div>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Phases
