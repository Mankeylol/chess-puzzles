"use client";

import { useState, useEffect } from "react";

export default function Leaderboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("/api/leaderboard");
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen p-4 mt-32">
            <div className="bg-[#4B824B] h-[40px] p-1 w-40 rounded-[8px] flex justify-center items-center mb-8">
                <h1 className="text-[#EBECD0]">Leaderboard</h1>
            </div>

            {/* Ordered List */}
            <ol className="flex flex-col gap-2 ">
                {users.map((user: any, index: number) => (
                    <li
                        key={user.fid}
                        className="flex justify-between items-center bg-[#EBECD0] p-1 w-60 h-[40px] rounded-[20px] px-3 text-[#4B824B]"
                    >
                        <div className="flex gap-2"><span>{index + 1}. </span>{user.username}</div>
                        <p>{user.highScore}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}
