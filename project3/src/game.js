import React, { useState, useEffect } from 'react';
import './style.css';

const Game = () => {
    const [generatedNumber, setGeneratedNumber] = useState(null);
    const [enteredNumber, setEnteredNumber] = useState('');
    const [essayCount, setEssayCount] = useState(0);
    const [trials, setTrials] = useState(0);
    const [showGeneratedNumber, setShowGeneratedNumber] = useState(false);

    useEffect(() => {
        generateNumber();
    }, []);

    const generateNumber = () => {
        const randomNumber = Math.floor(Math.random() * 7);
        setGeneratedNumber(randomNumber);
        setTrials(trials + 1);
        setShowGeneratedNumber(false);
    };

    const handleValidation = () => {
        if (parseInt(enteredNumber) === generatedNumber) {
            setEssayCount(essayCount + 1);
            setShowGeneratedNumber(true);
        }
    };

    const resetGame = () => {
        generateNumber();
        setEnteredNumber('');
        setEssayCount(0);
        setShowGeneratedNumber(false);
        setTrials(0);
    };

    return (
        <div className="container">
            <div className="game-container">
                <h1 className="title">Game</h1>
                <div className="center-input">
                    {showGeneratedNumber && <p>Generated Number: {generatedNumber}</p>}
                    <input
                        type="number"
                        value={enteredNumber}
                        onChange={(e) => setEnteredNumber(e.target.value)}
                    />
                    <button onClick={handleValidation}>Validate</button>
                    <button onClick={resetGame}>Initialize</button>
                    <div className="result-container">
                        <p>Essays: {essayCount}</p>
                        <p>Trials: {trials}</p> { }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
