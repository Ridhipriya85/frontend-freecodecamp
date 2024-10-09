"use client";

import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../../components/main-layout';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    // You can add any logic here that you want to run when the button is clicked
    console.log('Button clicked! Redirecting to login...');
    
    // Navigate to the login page
    router.push('/auth/login');
  };

  return (
    <>
      <Head>
        <title>Home - FreeCodeCamp</title>
      </Head>

      <MainLayout meta={{ title: 'Dashboard' }}>
        {/* Main section */}
        <main className="flex flex-col items-center justify-center py-20 text-center  bg-gray-100 text-black min-h-screen">
          <h1 className="text-5xl font-bold mb-6">Learn to code — for free.</h1>
          <h2 className="text-3xl mb-4">Build projects.</h2>
          <h2 className="text-3xl mb-4">Earn certifications.</h2>

          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:
          </p>

          {/* Company logos section */}
          <div className="flex justify-center space-x-10 mb-10">
            {/* Replace with actual logos as image tags */}
            <img src="/logos/apple.png" alt="Apple" className="h-12" />
            <img src="/logos/google.png" alt="Google" className="h-12" />
            <img src="/logos/microsoft.png" alt="Microsoft" className="h-12" />
            <img src="/logos/spotify.png" alt="Spotify" className="h-12" />
            <img src="/logos/amazon.png" alt="Amazon" className="h-12" />
          </div>

          {/* Call to action */}
          <button
            onClick={handleButtonClick}
            className="px-10 py-4 bg-yellow-400 text-black font-bold text-lg rounded-md cursor-pointer hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Get started (This is free)
          </button>
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
