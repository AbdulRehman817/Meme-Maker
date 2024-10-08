import React from "react";
import Image from "next/image";
import Link from "next/link";
const Page = async () => {
  const data = await fetch("https://api.imgflip.com/get_memes");
  const response = await data.json();
  console.log(response.data.memes);
  interface Memes {
    id: string;
    name: string;
    url: string;
  }
  return (
    <>
      <h1 className="text-center text-xl mt-4">Meme Maker</h1>
      {response.data.memes.map((item: Memes) => {
        return;
        <div key={item.id}>
          <Image src={item.url} alt="memes" width={200} height={200} />
          <button>
            <Link
              href={{
                pathname: "cretememes",
                query: {
                  url: "creatememes",
                  id: "item.id",
                },
              }}
            >
              Generate Meme
            </Link>
          </button>
        </div>;
      })}
    </>
  );
};

export default Page;
