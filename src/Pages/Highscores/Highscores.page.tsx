import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation} from 'react-i18next';
import axios from "axios";
import Navbar from "../../assets/Components/Navbar/Navbar";
import style from './Highscores.page.module.scss'

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

const Highscores = () => {

    const { t } = useTranslation();
    const [sortParam, setSortParam] = useState('dateAsc');
    const winStatement = 'You won'

    const getScore = () => {
        return axios.get<Scores[]>(`http://localhost:3006/scores/${sortParam}`)
        .then(res => {
            return res.data
    })}
    
    const {data: scores, error, status}: ScoresProps = useQuery({
        queryKey: [sortParam],
        queryFn: getScore
    })
    if (status === "loading"){
        return <h1>{t('play.loading')}</h1>
    } 
    if (!scores){
        return <h1>{JSON.stringify(error)}</h1>
    } 

    const totalWinCount = scores.filter(object => object.gameEndState === winStatement).length
    const totalLostCount = scores.length-totalWinCount;

    return (
        <>
            <div className="background">
                <div className="overlay">
                </div>
            </div>
            <div className="appContainer">
                <Navbar/>
                <div className={style.container}>
                    <table>
                        <thead className={style.scoreRow}>
                            <tr>
                                <td className={`${style.padding} ${style.tableHeader}`}
                                    onClick = {() => {
                                        if(sortParam === 'statusDesc'){
                                            setSortParam('statusAsc')
                                        }else{
                                            setSortParam('statusDesc')
                                        }
                                    }}>
                                    {t('scores.status')}
                                </td>
                                <td className={style.tableHeader}
                                    onClick = {() => {
                                        if(sortParam === 'playerPointsDesc'){
                                            setSortParam('playerPointsAsc')
                                        }else{
                                            setSortParam('playerPointsDesc')
                                        }
                                    }}>
                                    {t('scores.yourScore')}
                                </td>
                                <td className={style.tableHeader}
                                    onClick = {() => {
                                        if(sortParam === 'opponentPointsDesc'){
                                            setSortParam('opponentPointsAsc')
                                        }else{
                                            setSortParam('opponentPointsDesc')
                                        }
                                    }}>
                                    {t('scores.opponentScore')}
                                </td>
                                <td className={style.tableHeader}
                                    onClick = {() => {
                                        if(sortParam === 'dateDesc'){
                                            setSortParam('dateAsc')
                                        }else{
                                            setSortParam('dateDesc')
                                        }
                                    }}>
                                    {t('scores.date')}
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                        {scores.map(score => {
                            return (
                                <tr className={style.scoreRow}
                                    key = {score.id}
                                >
                                    <td>{t(score.gameEndState)}</td>
                                    <td>{score.playerPoints}</td>
                                    <td>{score.opponentPoints}</td>
                                    <td>{score.date}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <div className={style.total}><h1>{t('play.wins', { totalWinCount, totalLostCount })}</h1></div>
                </div>
            </div>
        </>
    );
};

export default Highscores;
