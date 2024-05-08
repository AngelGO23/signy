// pages/index.js or pages/index.tsx

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page - ASL Game</title>
        <meta name="description" content="Learn American Sign Language through games" />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to <a className="text-blue-600">ASL Game!</a>
          </h1>
          <p className="mt-3 text-2xl">
            Start learning American Sign Language in a fun and interactive way.
          </p>
          {/* More content and components specific to the Home page */}
        </main>
      </div>
    </>
  );
};

export default Home;
