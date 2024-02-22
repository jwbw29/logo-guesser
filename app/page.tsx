import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center z-10 w-full lg:flex">
        <div className="flex items-center justify-center border border-black w-[600px] h-[100px]">
          Guess the logo
        </div>
        <div className=" flex size-48 items-center justify-center m-12 border border-black">
          Logo
        </div>
        <div className="grid w-[600px] h-52 m-12 grid-cols-2 grid-rows-2 gap-8">
          <button className="border border-black">answer 1</button>
          <button className="border border-black">answer 2</button>
          <button className="border border-black">answer 3</button>
          <button className="border border-black">answer 4</button>
        </div>
      </div>
    </main>
  );
}
