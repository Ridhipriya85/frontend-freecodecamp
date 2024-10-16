/** @format */
"use client";

// import React from "react";
// import { MdOutlineLocationOn, MdWbSunny } from "react-icons/md";
// import { MdMyLocation } from "react-icons/md";
// import SearchBox from "./SearchBox";
// import { useState } from "react";
// import axios from "axios";
// import { loadingCityAtom, placeAtom } from "@/app/atom";
// import { useAtom } from "jotai";

// type Props = { location?: string };

// const API_KEY = process.env.NEXT_PUBLIC_codecamp_KEY;

// export default function Navbar({ location }: Props) {
//   const [city, setCity] = useState("");
//   const [error, setError] = useState("");
//   //
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [place, setPlace] = useAtom(placeAtom);
//   const [_, setLoadingCity] = useAtom(loadingCityAtom);

//   async function handleInputChang(value: string) {
//     setCity(value);
//     if (value.length >= 3) {
//       try {
//         const response = await axios.get(
//           `https://api.opencodecampmap.org/data/2.5/find?q=${value}&appid=${API_KEY}`
//         );

//         const suggestions = response.data.list.map((item: any) => item.name);
//         setSuggestions(suggestions);
//         setError("");
//         setShowSuggestions(true);
//       } catch (error) {
//         setSuggestions([]);
//         setShowSuggestions(false);
//       }
//     } else {
//       setSuggestions([]);
//       setShowSuggestions(false);
//     }
//   }

//   function handleSuggestionClick(value: string) {
//     setCity(value);
//     setShowSuggestions(false);
//   }

//   function handleSubmiSearch(e: React.FormEvent<HTMLFormElement>) {
//     setLoadingCity(true);
//     e.preventDefault();
//     if (suggestions.length == 0) {
//       setError("Location not found");
//       setLoadingCity(false);
//     } else {
//       setError("");
//       setTimeout(() => {
//         setLoadingCity(false);
//         setPlace(city);
//         setShowSuggestions(false);
//       }, 500);
//     }
//   }

//   function handleCurrentLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(async (postiion) => {
//         const { latitude, longitude } = postiion.coords;
//         try {
//           setLoadingCity(true);
//           const response = await axios.get(
//             `https://api.opencodecampmap.org/data/2.5/codecamp?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
//           );
//           setTimeout(() => {
//             setLoadingCity(false);
//             setPlace(response.data.name);
//           }, 500);
//         } catch (error) {
//           setLoadingCity(false);
//         }
//       });
//     }
//   }
//   return (
//     <>
//       <nav className="shadow-sm  sticky top-0 left-0 z-50 bg-white">
//         <div className="h-[80px]     w-full    flex   justify-between items-center  max-w-7xl px-3 mx-auto">
//           <p className="flex items-center justify-center gap-2  ">
//             <h2 className="text-gray-500 text-3xl">codecamp</h2>
//             <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
//           </p>
//           {/*  */}
//           <section className="flex gap-2 items-center">
//             <MdMyLocation
//               title="Your Current Location"
//               onClick={handleCurrentLocation}
//               className="text-2xl  text-gray-400 hover:opacity-80 cursor-pointer"
//             />
//             <MdOutlineLocationOn className="text-3xl" />
//             <p className="text-slate-900/80 text-sm"> {location} </p>
//             <div className="relative hidden md:flex">
//               {/* SearchBox */}

//               <SearchBox
//                 value={city}
//                 onSubmit={handleSubmiSearch}
//                 onChange={(e) => handleInputChang(e.target.value)}
//               />
//               <SuggetionBox
//                 {...{
//                   showSuggestions,
//                   suggestions,
//                   handleSuggestionClick,
//                   error
//                 }}
//               />
//             </div>
//           </section>
//         </div>
//       </nav>
//       <section className="flex   max-w-7xl px-3 md:hidden ">
//         <div className="relative ">
//           {/* SearchBox */}

//           <SearchBox
//             value={city}
//             onSubmit={handleSubmiSearch}
//             onChange={(e) => handleInputChang(e.target.value)}
//           />
//           <SuggetionBox
//             {...{
//               showSuggestions,
//               suggestions,
//               handleSuggestionClick,
//               error
//             }}
//           />
//         </div>
//       </section>
//     </>
//   );
// }

// function SuggetionBox({
//   showSuggestions,
//   suggestions,
//   handleSuggestionClick,
//   error
// }: {
//   showSuggestions: boolean;
//   suggestions: string[];
//   handleSuggestionClick: (item: string) => void;
//   error: string;
// }) {
//   return (
//     <>
//       {((showSuggestions && suggestions.length > 1) || error) && (
//         <ul className="mb-4 bg-white absolute border top-[44px] left-0 border-gray-300 rounded-md min-w-[200px]  flex flex-col gap-1 py-2 px-2">
//           {error && suggestions.length < 1 && (
//             <li className="text-red-500 p-1 "> {error}</li>
//           )}
//           {suggestions.map((item, i) => (
//             <li
//               key={i}
//               onClick={() => handleSuggestionClick(item)}
//               className="cursor-pointer p-1 rounded   hover:bg-gray-200"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black">
    <div className="container  flex items-center justify-between">
      {/* Search Bar */}
      <div className="hidden md:block md:ml-8 md:flex-grow">
        <input
          type="text"
          placeholder="Search 8,000+ tutorials"
          className="px-6 py-1 rounded bg-gray-100 text-black"
        />
      </div>
  
      <nav className="flex justify-center items-center w-full p-2 bg-black text-white">
        <div className="text-white text-2xl font-bold">
          FreeCodeCamp
        </div>
      </nav>
  
      {/* Right Section (Menu or buttons) */}
      <div className="flex items-center ">
        <button className="px-4 py-2 bg-white text-black rounded-md">Menu</button>
      </div>
    </div>
  
    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  
    {/* Mobile Dropdown Menu */}
    {isOpen && (
      <div className="md:hidden mt-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <Link href="/signin">
          <span className="block text-center px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">
            Sign In
          </span>
        </Link>
      </div>
    )}
  </nav>
  
  
  );
};

export default Navbar;
