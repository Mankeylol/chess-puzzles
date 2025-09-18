"use client";

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
} from "@coinbase/onchainkit/minikit";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { useRouter } from "next/navigation";

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();

  const router = useRouter();
  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);
  const username = context?.user?.username;
  const fid = context?.user?.fid?.toString();


  const [score, setScore] = useState(0);

  const getUserScore = async (fid: string) => {
    const response = await fetch(`/api/data?fid=${fid}`);
    const data = await response.json();
    console.log(data);
    setScore(data.highScore);
  };

  useEffect(() => {
    if (fid) {
      getUserScore(fid);
    }
  }, [fid]);
  
 

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center gap-3">
      <img src={context?.user?.pfpUrl || "hero.png" }  alt="hello" className="w-16 h-16 rounded-full border border-[#4B824B]" />
      <div className="flex flex-col items-center bg-[#1E1E1E] p-1 w-32 rounded-[12px]">
      <p className="text-[12px] text-[#4B824B]"> Hello {username}!</p>
      </div>
      </div>
      <p className="text-[10px] text-[#EBECD0] mt-10">HighScore: {score}</p>
      <div className="flex justify-center mt-2 gap-2">
        <button className=" bg-[#4b824b] text-white px-4 py-2 rounded w-32">Check Stats</button>
        <button onClick={() => router.push("/puzzles")} className=" bg-[#4b824b] text-white px-4 py-2 rounded w-32">Play</button>
      </div>
      <Navbar/>
    </div>
  );
}
