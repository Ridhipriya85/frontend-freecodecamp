"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import MainLayout from '../../components/main-layout';

const Home = () => {
  const router = useRouter();

 

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated'); 
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);
  

  const certifications = [
    { title: "(New) Responsive Web Design Certification", hours: "300 hours" },
    { title: "Legacy Responsive Web Design Certification", hours: "300 hours" },
    { title: "JavaScript Algorithms and Data Structures Certification", hours: "300 hours" },
    { title: "Front End Development Libraries Certification", hours: "300 hours" },
    { title: "Data Visualization Certification", hours: "300 hours" },
    { title: "Back End Development and APIs Certification", hours: "300 hours" }
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');  
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };
  
  return (
    <MainLayout meta={{ title: 'Dashboard' }}>
      <main className="flex flex-col items-center justify-center py-20 bg-gray-100 text-black min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to freeCodeCamp.org</h1>
        <p className="italic text-lg mb-6">&quot;I have not failed. I have just found 10,000 ways that will not work.&quot; - Thomas A. Edison</p>

        {/* Certification Cards */}
        <div className="space-y-4 w-full max-w-lg">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border border-gray-400 p-4 rounded-lg flex justify-between items-center bg-white shadow-md"
            >
              <span>{cert.title}</span>
              <span className="font-semibold text-gray-700">{cert.hours}</span>
            </div>
          ))}
        </div>
      </main>
    </MainLayout>
  );
};

export default Home;
