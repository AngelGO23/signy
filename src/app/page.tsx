// pages/index.js or pages/index.tsx

import Image from "next/image"

const Home = () => {
  return (
    <>
      
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to <a className="text-blue-600">Game!</a>
          </h1>
          <p className="mt-3 text-2xl">
            Start learning  in a fun and interactive way.
          </p>
          <Image
            alt="Hand Signs for american sign language"
            src="../../public/Handsign.svg"
            width = "500"
            height="500">

          </Image>
          

        </main>
      </div>
    </>
  );
};

export default Home;
