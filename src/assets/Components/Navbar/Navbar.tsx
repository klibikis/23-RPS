import { useTranslation} from 'react-i18next';
import style from './Navbar.module.scss'
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className = {style.navContainer}>
            <div className = 'mainNav'>
            <NavLink 
                className = { style.navItem }
                to = "/" 
                style={({ isActive }) => isActive ? {transform: "scale(1.3)"} : {}}>
                {t('navbar.home')}
            </NavLink>
            <NavLink 
                className = { style.navItem }
                to = "/play" 
                style={({ isActive }) => isActive ? {transform: "scale(1.3)"} : {}}>
                {t('navbar.play')}
            </NavLink>
            <NavLink 
                className = { style.navItem }
                to = "/highscores" 
                style={({ isActive }) => isActive ? {transform: "scale(1.3)"} : {}}>
                {t('navbar.highscores')}
            </NavLink>
            </div>
            <div className = 'langNav'>
                <div className='langDiv'>
                    <img className='flag' src = 'https://flagdownload.com/wp-content/uploads/Flag_of_Latvia-1024x512.png' alt = 'lv' 
                    onClick={() => i18n.changeLanguage('lv')}/>
                </div>
                <div className='langDiv'>
                    <img className='flag' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png' alt = 'eng' 
                    onClick={() => i18n.changeLanguage('eng')}
                />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
