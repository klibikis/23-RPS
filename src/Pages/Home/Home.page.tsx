import { useState } from "react";
import { useTranslation, Trans} from 'react-i18next';
import Navbar from "../../assets/Components/Navbar/Navbar";
import style from './Home.page.module.scss'

const Home = () => {
    
    const { t, i18n } = useTranslation();

    const aboutGame = <Trans i18nKey="home.about.description" />
    const aboutRules =  <Trans i18nKey="home.rules.description" />
    const aboutWhy =  <Trans i18nKey="home.why.description" />

    
    const [activeAboutText, setActiveAboutText] = useState(aboutGame); 

    

    return (
        <>
            <div className="background">
                <div className="overlay">
                </div>
            </div>
            <div className="appContainer">
                <Navbar/>
                <div className={style.aboutContainer}>
                <div className={style.itemsContainer}>
                    <div className={style.aboutItem} 
                        onClick = {() => {
                            setActiveAboutText(aboutGame)
                        }}>
                            {t('home.about.title')}
                    </div>
                    <div className={style.aboutItem} 
                        onClick = {() => {
                            setActiveAboutText(aboutRules)
                        }}>
                            {t('home.rules.title')}
                    </div>
                    <div className={style.aboutItem} 
                        onClick = {() => {
                            setActiveAboutText(aboutWhy)
                        }}>
                            {t('home.why.title')}
                    </div>
                </div>
                    <p className={`aboutText ${style.tab}`}>
                        {activeAboutText} 
                    </p>
                </div>
            </div>
        </>
            
    );
};

export default Home;
