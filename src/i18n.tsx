import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    navbar: {
                        home: 'Home',
                        play: 'Play',
                        highscores: 'Highscores'
                    },
                    home: {
                        about: 'about',
                        rules: 'rules',
                        why: 'why'
                    },
                    play: {
                        weapon: 'Your weapon',
                        opponentWeapon: 'Computer weapon',
                        status: 'Current points: | Player: {{playerPoints}}/5 | Opponent: {{opponentPoints}}/5',
                        wins: 'Total Wins: {{totalWinCount}} | Total Losses: {{totalLostCount}}',
                        again: 'Try again?',
                        shuffling: 'Shuffling',
                        loading: 'Loading...'
                    },
                    scores: {
                        status: 'Game status',
                        yourScore: 'Your score',
                        opponentScore: 'Opponent score',
                        date: 'Date'
                    },
                    'You won': 'You won',
                    'You lost': 'You lost',
                    draw: 'Draw',
                    wrong: 'Something went wrong',
                    status: 'Game status',
                    aboutGame: 'Rock Paper Scissors is a zero sum game that is usually played by two people using their hands and no tools. The idea is to make shapes with an outstretched hand where each shape will have a certain degree of power and will lead to an outcome.',
                    aboutRules: 'Although the game has a lot of complexity to it, the rules to play it are pretty simple. The game is played where players deliver hand signals that will represent the elements of the game: rock, paper and scissors. The outcome of the game is determined by 3 simple rules: Rock wins against scissors. Scissors win against paper. Paper wins against rock',
                    aboutWhy: 'This game is played by children and adults and is popular all over the world. Apart from being a game played to pass time, the game is usually played in situations where something has to be chosen. It is similar in that way to other games like flipping the coin, throwing dice or drawing straws. There is no room for cheating or for knowing what the other person is going to do so the results are usually very satisfying with no room for fighting or error.'
                },
            },
            lv: {
                translation: {
                    navbar: {
                        home: 'B??da',
                        play: 'Sp??l??t',
                        highscores: 'Rezult??ti'
                    },
                    home: {
                        about: 'Par sp??li',
                        rules: 'Noteikumi',
                        why: 'K??p??c'
                    },
                    play: {
                            weapon: 'Tavs ierocis',
                            opponentWeapon: 'Pretinieka ierocis',
                            status: 'Punkti: | Sp??l??t??js: {{playerPoints}}/5 | Pretinieks: {{opponentPoints}}/5',
                            wins: 'Uzvaras kop??: {{totalWinCount}} | Zaud??jumi kop??: {{totalLostCount}}',
                            again: 'M????in??t v??lreiz?',
                            shuffling: 'Izv??l??s',
                            loading: 'Iel??d??...'
                    },
                    scores: {
                        status: 'Sp??les statuss',
                        yourScore: 'Tavi punkti',
                        opponentScore: 'Pretinieka punkti',
                        date: 'Datums'
                    },
                    'You won': 'Tu vinn??ji',
                    'You lost': 'Tu zaud??ji',
                    draw: 'Neiz????irts',
                    wrong: 'Kaut kas nog??ja greizi',
                    status: 'Sp??les statuss',
                    aboutGame: 'Akmens, ??????res, pap??r??ts ir sp??le, kur?? piedal??s divi vai vair??ki cilv??ki. To parasti sp??l??, lai noskaidrotu uzvar??t??ju starp tiem. ???? sp??le bie??i tiek lietota k?? atlases metode, lai p??c nejau????bas principa tiktu noskaidrota persona k??dam ??pa??am uzdevumam, l??dz??gi, k?? mon??tas me??ana vai salmi??u vilk??ana. Tikai, at????ir??b?? no patie????m nejau??as atlases, ??o sp??li sp??l??jot vair??kas reizes, var jau iepriek?? paredz??t, kuru no elementiem (akmeni, ??????res vai pap??r??ti) uzliks pretinieks.',
                    aboutRules: 'Lai gan sp??le ir da??as sare??????tas deta??as, t??s sp??l????anas noteikumi ir diezgan vienk??r??i. Sp??le tiek sp??l??ta, izmantojot roku ??estus, kas simboliz?? sp??les elementus: akmens, pap??rs un ??????res. Sp??les izn??kums tiek noteikts, pamatojoties uz 3 vienk??r??iem noteikumiem: Akmens uzvar ??????res, ??????res uzvar pap??ru, pap??rs uzvar akmeni.',
                    aboutWhy: '??o sp??li sp??l?? gan b??rni, gan pieaugu??ie, un t?? ir popul??ra vis?? pasaul??. T?? k?? sp??le tiek sp??l??ta ne tikai, lai kav??tu laiku, bet ar?? situ??cij??s, kad ir j??izv??las kaut kas. T?? ir l??dz??ga cit??m sp??l??m, piem??ram, mon??tas me??anai, kauli??u me??anai vai salmi??u vilk??anai. Nav iesp??jams kr??pties vai zin??t, ko otrs cilv??ks dar??s, t??p??c rezult??ti parasti ir visiem apmierino??i, un nav neviena iemesla str??diem vai k????d??m.'
                },
            },
        },
    });

export default i18n;
