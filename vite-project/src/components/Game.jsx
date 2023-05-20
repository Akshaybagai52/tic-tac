import React from 'react'
import Board from './Square'
import { useState } from 'react';

const Game = () => {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const  squares = history[history.length - 1];
    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares])
        setXIsNext(!xIsNext)
    }
    return (
        <>
            <div>
                <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay}  />
            </div>
            <div>
                <ol></ol>

            </div>
        </>
    )
}

export default Game