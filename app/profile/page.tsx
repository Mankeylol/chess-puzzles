"use client";

import { useMiniKit } from "@coinbase/onchainkit/minikit";
import { useState, useEffect } from "react";

export default function Profile() {
    const { context } = useMiniKit();
    const username = context?.user?.username;
    const fid = context?.user?.fid || "124";
    const [score, setScore] = useState(0);
    const [gamesPlayed, setGamesPlayed] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const getUserScore = async (fid: string) => {
        const response = await fetch(`/api/data?fid=${fid}`);
        const data = await response.json();
        console.log(data);
        setScore(data.totalScore);
        setGamesPlayed(data.gamesPlayed);
        setHighScore(data.score);
    };
    useEffect(() => {
        if (fid) {
            getUserScore(fid.toString());
        }
    }, [fid]);
    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-20 text-lg text-[#EBECD0] mb-8">Profile</h1>
            <div className="flex items-center gap-2 flex-col">
            <img src={context?.user?.pfpUrl || "hero.png"} alt="hello" className="w-20 h-20 rounded-full border border-[#4B824B] mb-4" />
                <p className="text-[#EBECD0] text-[14px] mb-4">{username || 'mankey'}</p>
            </div>
            <div className="flex items-center gap-2 flex-col bg-[#EBECD0] w-[290px] rounded-[20px] px-2 py-6 text-[#4B824B]">
                <div className="flex flex-row justify-between w-full px-4">
                    <p>Total Puzzles solved</p>
                    <p className="font-bold">{score}</p>
                </div>
                <div className="flex flex-row justify-between w-full px-4">
                    <p>High Score</p>
                    <p className="font-bold">{highScore}</p>
                </div>
                <div className="flex flex-row justify-between w-full px-4">
                    <p>Games Played</p>
                    <p className="font-bold">{gamesPlayed}</p>
                </div> 
            </div>
        </div>
    )
}