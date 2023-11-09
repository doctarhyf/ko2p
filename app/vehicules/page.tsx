import Image from "next/image";
import React from "react";

function Vehicules({ searchParams }: { searchParams: any }) {
  console.log(searchParams);

  return (
    <div>
      <div className=" overflow-hidden relative p-4 min-h-[240pt] text-white bg-pink-400 ">
        <div className=" flex   ">
          <Image
            className=" bg-red-300 flex-grow absolute left-0 object-center  object-fill top-0 "
            src={"/alfa.webp"}
            width={1024}
            height={1024}
            alt=""
          />
        </div>

        <div className="text-white text-5xl absolute ">Vehicule</div>
      </div>
    </div>
  );
}

export default Vehicules;
