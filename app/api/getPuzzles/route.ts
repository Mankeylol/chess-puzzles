import { NextResponse } from "next/server";

const difficulties = ["easiest", "easier", "normal", "harder", "hardest"] as const;
type Difficulty = (typeof difficulties)[number];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const difficulty = searchParams.get('difficulty');

    
    if (!difficulties.includes(difficulty as Difficulty)) {
        return NextResponse.json(
            { error: 'Invalid difficulty' },
            { status: 400 }
        );
    }
    const response = await fetch(`https://lichess.org/api/puzzle/next?difficulty=${difficulty}`);
    const data = await response.json();

    // Extract only PGN and solution
    return NextResponse.json({
      pgn: data.game?.pgn,
      solution: data.puzzle?.solution,
    });
}
