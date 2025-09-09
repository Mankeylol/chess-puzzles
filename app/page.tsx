"use client";

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
} from "@coinbase/onchainkit/minikit";
import { useEffect } from "react";
import Board from "./components/Chessboard";

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);



 

  return (
    <div className=" flex items-center justify-center min-h-screen p-4">
      {/* <div className="w-full max-w-[90vmin] aspect-square">
      <Board/>
      </div> */}
      
    </div>
  );
}
