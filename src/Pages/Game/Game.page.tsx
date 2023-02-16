import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation, Trans} from 'react-i18next';
import Navbar from "../../assets/Components/Navbar/Navbar";
import style from './Game.page.module.scss'
import '../../App.scss'
import axios from "axios";

type Scores = {
    id: number,
    date: any,
    gameEndState: string,
    playerPoints: number,
    opponentPoints: number
}
type ScoresProps = {
    data: Scores[] | undefined,
    error: unknown,
    status: "error" | "success" | "loading"
}



const Game = () => {
    const [weapon, setWeapon] = useState("default");
    const [computerShuffleWeapon, setComputerShuffleWeapon] = useState("default");
    const [computerWeapon, setComputerWeapon] = useState("default");
    const [gameResult, setGameResult] = useState("Game status");
    const [isShuffling, setIsShuffling] = useState(false);
    const [isGameEnd, setIsGameEnd] = useState(false);
    const [playerPoints, setPlayerPoints] = useState(0);
    const [opponentPoints, setOpponentPoints] = useState(0);
    const [totalWinCount, setTotalWinCount] = useState(0);
    const [totalLostCount, setTotalLostCount] = useState(0);
    const [completedStatus, setCompletedStatus] = useState('');
    const { t, i18n } = useTranslation();
    

    const weaponArray: string[] = ['rock', 'paper', 'scissors']
    const winStatement = 'You won'
    const lostStatement = 'You lost'
    const drawStatement = 'Draw'

    const getScores = () => {
        return axios
            .get<Scores[]>("http://localhost:3006/scores")
            .then(res => {
                if(res.data){
                    setTotalWinCount(res.data.filter(object => object.gameEndState === winStatement).length);
                    setTotalLostCount(res.data.filter(object => object.gameEndState === lostStatement).length);
                }
                return res.data
        })
    }

const getDate = () => {
    let today = new Date().toLocaleDateString()
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return (time + " " + today)
}


    useEffect(() => {
        if(weapon !== 'default' || computerWeapon !== 'default'){
            handleResult(weapon, computerWeapon)
        }
    },[computerWeapon]) 

    useEffect(() => {
        if(!isShuffling){
            if(gameResult === winStatement){
                setPlayerPoints(playerPoints+1)
            }else if(gameResult === lostStatement){
                setOpponentPoints(opponentPoints+1)
            }
        }
    },[gameResult]) 

    useEffect(() => {
        if(playerPoints === 5){
            setIsGameEnd(true);
            setCompletedStatus("Won");
            setTotalWinCount(totalWinCount+1);
            postResult();
        }else if(opponentPoints === 5){
            setIsGameEnd(true);
            setCompletedStatus("Lost");
            setTotalLostCount(totalLostCount+1);
            postResult();
        }
    },[playerPoints, opponentPoints]) 

    const postResult = () => {
        axios.
            post("http://localhost:3006/scores", {
                gameEndState: gameResult,
                playerPoints: playerPoints,
                opponentPoints: opponentPoints,
                date: getDate()
            })
            .then(res => {
                return res.data
            });
    }

    const handleResult = (weapon: string, computerWeapon: string) => {
        if(weapon === 'rock' && computerWeapon === 'paper'){
            setGameResult(lostStatement)
        }else if(weapon === 'rock' && computerWeapon === 'scissors'){
            setGameResult(winStatement)
        }else if(weapon === 'rock' && computerWeapon === 'rock'){
            setGameResult(drawStatement)
        }else if(weapon === 'paper' && computerWeapon === 'paper'){
            setGameResult(drawStatement)
        }else if(weapon === 'paper' && computerWeapon === 'scissors'){
            setGameResult(lostStatement)
        }else if(weapon === 'paper' && computerWeapon === 'rock'){
            setGameResult(winStatement)
        }else if(weapon === 'scissors' && computerWeapon === 'scissors'){
            setGameResult(drawStatement)
        }else if(weapon === 'scissors' && computerWeapon === 'paper'){
            setGameResult(winStatement)
        }else if(weapon === 'scissors' && computerWeapon === 'rock'){
            setGameResult(lostStatement)
        }else{
            setGameResult('Something went wrong')
        }
    }

    const fakeShuffle = () => {
        setIsShuffling(true)
        let fakeShuffleId = Math.floor(Math.random() * 3);
        const shuffleId = setInterval(() => {
            setComputerShuffleWeapon(weaponArray[fakeShuffleId])
            fakeShuffleId += 1;
            if(fakeShuffleId > 2){
                fakeShuffleId = 0;
            }
        }, 100)
        return shuffleId
    }

    const shuffleComputerCards = () => {
        let shuffleId = fakeShuffle()
        setTimeout(() => {
            clearInterval(shuffleId)
            let weaponIndex = Math.floor(Math.random() * 3);
            setIsShuffling(false)
            setComputerWeapon(weaponArray[weaponIndex])
        }, 2000)        
    }

    const handleGameEndClick = () => {
        setIsGameEnd(false);
        setGameResult('Game status');
        setPlayerPoints(0);
        setOpponentPoints(0);
        setWeapon('default');
        setComputerWeapon('default');
    }

    const {data, error, status}: ScoresProps = useQuery({
        queryKey: ["scores"],
        queryFn: getScores,
    })
    if (status === "loading"){
        return <h1>Loading...</h1>
    } 
    if (!data){
        return <h1>{JSON.stringify(error)}</h1>
    } 

    return (
        <>
            <div className="background">
                    <div className="overlay">
                    </div>
            </div>
            <div className="appContainer">
                <Navbar/>
                <div className={style.gameContainer}>
                    <div className={style.playerContainer}>
                        {isGameEnd ? <h1>YOU {completedStatus}</h1> : <h1>{t('play.weapon')}:</h1>}
                        <div className={style.choicesContainer}>
                            <div 
                                className='weapon rock'
                                onClick = {() => {
                                    if(!isShuffling && !isGameEnd){
                                        setWeapon('rock')
                                        shuffleComputerCards()
                                        setComputerWeapon("")
                                    }
                                    
                                }}
                            />
                            <div 
                                className='weapon paper'
                                onClick = {() => {
                                    if(!isShuffling && !isGameEnd){
                                        setWeapon('paper')
                                        shuffleComputerCards()
                                        setComputerWeapon("")
                                    }
                                }}
                            />
                            <div 
                                className='weapon scissors'
                                onClick = {() => {
                                    if(!isShuffling && !isGameEnd){
                                        setWeapon('scissors')
                                        shuffleComputerCards()
                                        setComputerWeapon("")
                                    }
                                }}
                            />
                        </div>
                        <div className={`chosenWeapon ${weapon}`}></div>
                    </div>
                    <div className={`${style.playerContainer} ${style.computerContainerGap}`}>
                        {isGameEnd ? <h1>YOU {completedStatus}</h1> : <h1>{t('play.opponentWeapon')}:</h1>}
                        <div className={`chosenWeapon ${isShuffling ? computerShuffleWeapon : computerWeapon}`}></div>
                        {isGameEnd ? 
                            <button 
                            className={style.button}
                            onClick = {() => {
                                handleGameEndClick();
                            }}
                            >
                                {t('play.again')}
                            </button> : 
                            <h1>{isShuffling ? <Trans i18nKey="play.shuffling" /> : gameResult}</h1>
                        }
                    </div>
                </div>
                <div className={style.resultsContainer}>
                    <h1>{t('play.status', { playerPoints, opponentPoints })}</h1>
                    <h1>{t('play.wins', { totalWinCount, totalLostCount })}</h1>
                </div>   
            </div>
        </>
    )
};

export default Game;
