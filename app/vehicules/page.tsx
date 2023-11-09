import Image from "next/image";
import React from "react";

function Vehicules({ searchParams }: { searchParams: any }) {
  console.log(searchParams);

  return (
    <div>
      <div className=" overflow-hidden relative p-4 min-h-[240pt] text-white bg-black ">
        <div className=" flex   ">
          <Image
            className=" opacity-50 h-full w-full  flex-grow absolute left-0 object-center  object-cover top-0 "
            src={"/alfa.webp"}
            width={1024}
            height={1024}
            alt=""
          />
        </div>

        <div className="text-white text-5xl  absolute left-0 top-0 w-full p-4 bg-gradient-to-b from-black to-black/0 ">
          Vehicule
        </div>

        <p className=" bg-black/50 rounded-md p-4 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          Pour tous vos deals de vehicules
        </p>
      </div>
    </div>
  );
}

export default Vehicules;
