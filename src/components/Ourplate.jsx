import React from "react";

const Ourplate = () => {
  return (
    <>
        <div className=" mt-10 m-auto bg-black text-white rounded-lg flex h-60 justify-evenly items-center w-11/12">
            <h1 className=" font-bold text-3xl">Plateforms</h1>
            <hr className="w-20 transform rotate-90"/>
            <img src="./android.png" alt="" className="w-20" />
            <img src="/apple.png" alt="" className="w-20"/>
        </div>
    </>
  );
};

export default Ourplate;
