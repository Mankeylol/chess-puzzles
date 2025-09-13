"use client";

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
} from "@coinbase/onchainkit/minikit";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Board from "./components/Chessboard";
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
  const fid = context?.user?.fid;


  const [score, setScore] = useState(0);

  const getUserScore = async (fid: string) => {
    const response = await fetch(`/api/data?fid=${fid}`);
    const data = await response.json();
    console.log(data);
    setScore(data.score);
  };

  getUserScore("123");
 

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen p-4">
      {/* <div className="w-full max-w-[90vmin] aspect-square">
      <Board/>
      </div> */}
      <div className="flex gap-6">
      <p> Hello {username}</p>
      <img src={context?.user?.pfpUrl} alt="hello" className="w-16 h-16 rounded-full" />
      </div>
      <p>Score: {score}</p>
      <div className="flex justify-center mt-10">
        <button onClick={() => router.push("/puzzles")} className=" bg-[#4b824b] text-white px-4 py-2 rounded">Play</button>
      </div>
      <Navbar/>
    </div>
  );
}
