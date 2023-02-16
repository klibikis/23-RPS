import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation, Trans} from 'react-i18next';
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

    const { t, i18n } = useTranslation();
    const [sortParam, setSortParam] = useState('dateAsc');

    const winStatement = 'You won'
    const lostStatement = 'You lost'
    const queryClient = useQueryClient()

const getScore = () => {
    return axios.get<Scores[]>(`http://localhost:3006/scores/${sortParam}`)
    .then(res => {
        console.log(sortParam)
        return res.data
})}
const {data: scores, error, status}: ScoresProps = useQuery({
    queryKey: ['score'],
    queryFn: getScore
})
if (status === "loading"){
    return <h1>Loading...</h1>
} 
if (!scores){
    return <h1>{JSON.stringify(error)}</h1>
} 

const totalWinCount = scores.filter(object => object.gameEndState === winStatement).length
const totalLostCount = scores.filter(object => object.gameEndState === lostStatement).length


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
                                <td className={style.padding}
                                    onClick = {() => {
                                        if(sortParam === 'statusDesc'){
                                            setSortParam('statusAsc')
                                        }else{
                                            setSortParam('statusDesc')
                                        }
                                        queryClient.invalidateQueries(["score"])
                                    }}>
                                    {t('scores.status')}
                                </td>
                                <td
                                    onClick = {() => {
                                        if(sortParam === 'playerPointsDesc'){
                                            setSortParam('playerPointsAsc')
                                        }else{
                                            setSortParam('playerPointsDesc')
                                        }
                                        queryClient.invalidateQueries(["score"])
                                    }}>
                                    {t('scores.yourScore')}
                                </td>
                                <td
                                    onClick = {() => {
                                        if(sortParam === 'opponentPointsDesc'){
                                            setSortParam('opponentPointsAsc')
                                        }else{
                                            setSortParam('opponentPointsDesc')
                                        }
                                        queryClient.invalidateQueries(["score"])
                                    }}>
                                    {t('scores.opponentScore')}
                                </td>
                                <td
                                    onClick = {() => {
                                        if(sortParam === 'dateDesc'){
                                            setSortParam('dateAsc')
                                        }else{
                                            setSortParam('dateDesc')
                                        }
                                        queryClient.invalidateQueries(["score"])
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
                                    <td>{score.gameEndState}</td>
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
