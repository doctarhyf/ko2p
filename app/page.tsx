import Image from "next/image";
import Link from "next/link";
import { icons } from "./flow";

export default function Home() {
  return (
    <main className=" p-4 ">
      <p className="text-5xl">Explore</p>

      <div className="flex gap-2 text-white my-4 ">
        <div className=" cursor-pointer hover:opacity-90 flex place-items-center text-center w-[30%] rounded-md bg-pink-400">
          <Link
            href={"/vehicules"}
            className="text-center flex-col mx-auto justify-center items-center flex"
          >
            <div className="">{icons.vehicule}</div>
            <div>Vehicules</div>
          </Link>
        </div>
        <div className="flex gap-2 flex-wrap">
          {[
            ["Annonces", "bg-green-400", icons.tag, "/annonces"],
            ["Maisons", "bg-blue-400", icons.home, "/maisons"],
            ["Services", "bg-orange-400", icons.service, "/services"],
            ["Boulots", "bg-amber-400", icons.jobs, "/boulots"],
          ].map((it, i) => (
            <Link
              className={` cursor-pointer hover:opacity-90  flex gap-2 justify-center items-center flex-grow rounded-md p-4 ${it[1]}`}
              key={i}
              href={it[3] as string}
            >
              <div>
                <div className=" w-fit mx-auto">{it[2]}</div>
                <div>{it[0]}</div>
              </div>
            </Link>
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
