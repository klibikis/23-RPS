import { useState } from "react";
import { useTranslation} from 'react-i18next';
import Navbar from "../../assets/Components/Navbar/Navbar";
import style from './Home.page.module.scss'

const Home = () => {
    
    const { t, i18n } = useTranslation();
    const [activeAboutText, setActiveAboutText] = useState('aboutGame'); 

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
                            setActiveAboutText('aboutGame')
                        }}>
                            {t('home.about')}
                    </div>
                    <div className={style.aboutItem} 
                        onClick = {() => {
                            setActiveAboutText('aboutRules')
                        }}>
                            {t('home.rules')}
                    </div>
                    <div className={style.aboutItem} 
                        onClick = {() => {
                            setActiveAboutText('aboutWhy')
                        }}>
                            {t('home.why')}
                    </div>
                </div>
                    <p className={`aboutText ${style.tab}`}>
                    {t(activeAboutText)}
                    </p>
                </div>
            </div>
        </>
            
    );
};

export default Home;
