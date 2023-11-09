import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" p-4 ">
      <p className="text-5xl">Explore</p>

      <div className="flex gap-2 text-white my-4 ">
        <div className=" flex place-items-center text-center w-[30%] rounded-md bg-pink-400">
          <div className=" mx-auto">Motors</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {[
            ["Classifieds", "bg-green-400"],
            ["Properties", "bg-blue-400"],
            ["Services", "bg-orange-400"],
            ["Jobs", "bg-amber-400"],
          ].map((it, i) => (
            <div
              key={it[0]}
              className={` flex justify-center items-center flex-grow rounded-md p-2 ${it[1]}`}
            >
              {it[0]}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {["Popular Trends", "Featured Ads", "Top Deals"].map((section, i) => (
          <div key={section} className="mb-4">
            <div className="flex  justify-between">
              <p className="font-bold">{section}</p>
              <Link
                className=" text-green-500 hover:text-green-400 hover:underline "
                href={"/"}
              >
                View all
              </Link>
            </div>
            <div className="flex gap-4 overflow-hidden ">
              {[1, 2, 3, 4, 5, 6].map((it, i) => (
                <div key={it} className="w-fit">
                  <div className="w-32 h-24 bg-fuchsia-300 rounded-md">
                    Image{i}
                  </div>
                  <div className="text-center">Title {i}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
