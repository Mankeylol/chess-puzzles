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
        <div>
            <h1>Leaderboard</h1>
            {users.map((user: any) => (
                <div key={user.fid}>
                    <p>{user.username}</p>
                    <p>{user.highScore}</p>
                </div>
            ))}
        </div>
    )
}