import Image from "next/image";
import Link from "next/link";
import { icons } from "./flow";

export default function Home() {
  return (
    <main className=" p-4 ">
      <p className="text-5xl">Explore</p>

      <div className="flex gap-2 text-white my-4 ">
        <div className=" cursor-pointer hover:opacity-90 flex place-items-center text-center w-[30%] rounded-md bg-pink-400">
          <div className=" mx-auto">
            <div className="text-center justify-center items-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                />
              </svg>
            </div>
            <div>Motors</div>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {[
            ["Classifieds", "bg-green-400", icons.tag],
            ["Properties", "bg-blue-400", icons.home],
            ["Services", "bg-orange-400", icons.service],
            ["Jobs", "bg-amber-400", icons.jobs],
          ].map((it, i) => (
            <div
              key={i}
              className={` cursor-pointer hover:opacity-90  flex gap-2 justify-center items-center flex-grow rounded-md p-4 ${it[1]}`}
            >
              <div>{it[2]}</div>
              <div>{it[0]}</div>
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
            <div className="flex gap-4 overflow-x-auto ">
              {[1, 2, 3, 4, 5, 6].map((it, i) => (
                <div key={it} className="w-fit">
                  <div className="w-32 overflow-hidden h-24 bg-fuchsia-300 rounded-md">
                    <Image
                      alt="it"
                      width={128}
                      height={128}
                      src={"https://random.imagecdn.app/128/128"}
                    />
                  </div>
                  <div className="text-center">Title {i}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 inset-x-0 bg-gray-800 p-4"></div>
    </main>
  );
}
