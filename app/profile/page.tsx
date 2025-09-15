"use client";

import { useMiniKit } from "@coinbase/onchainkit/minikit";

export default function Profile() {
    const { context } = useMiniKit();
    const username = context?.user?.username;
    const fid = context?.user?.fid;
    return (
        <div>
            <h1>Profile</h1>
            <div>
                <p>Username: {username}</p>
                <img src={context?.user?.pfpUrl} alt="hello" className="w-16 h-16 rounded-full" />
            </div>
        </div>
    )
}