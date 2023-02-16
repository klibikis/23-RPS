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
                        about: {
                            title: 'About',
                            description: 'Rock Paper Scissors is a zero sum game that is usually played by two people using their hands and no tools. The idea is to make shapes with an outstretched hand where each shape will have a certain degree of power and will lead to an outcome.'
                        },
                        rules: {
                            title: 'Rules',
                            description: 'Although the game has a lot of complexity to it, the rules to play it are pretty simple. The game is played where players deliver hand signals that will represent the elements of the game: rock, paper and scissors. The outcome of the game is determined by 3 simple rules: Rock wins against scissors. Scissors win against paper. Paper wins against rock'
                        },
                        why: {
                            title: 'Why',
                            description: 'This game is played by children and adults and is popular all over the world. Apart from being a game played to pass time, the game is usually played in situations where something has to be chosen. It is similar in that way to other games like flipping the coin, throwing dice or drawing straws. There is no room for cheating or for knowing what the other person is going to do so the results are usually very satisfying with no room for fighting or error.'
                        },
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
                    status: 'Game status'
                },
            },
            lv: {
                translation: {
                    navbar: {
                        home: 'Būda',
                        play: 'Spēlēt',
                        highscores: 'Rezultāti'
                    },
                    home: {
                        about: {
                            title: 'Par spēli',
                            description: 'Akmens, šķēres, papīrīts ir spēle, kurā piedalās divi vai vairāki cilvēki. To parasti spēlē, lai noskaidrotu uzvarētāju starp tiem. Šī spēle bieži tiek lietota kā atlases metode, lai pēc nejaušības principa tiktu noskaidrota persona kādam īpašam uzdevumam, līdzīgi, kā monētas mešana vai salmiņu vilkšana. Tikai, atšķirībā no patiešām nejaušas atlases, šo spēli spēlējot vairākas reizes, var jau iepriekš paredzēt, kuru no elementiem (akmeni, šķēres vai papīrīti) uzliks pretinieks.'
                        },
                        rules: {
                            title: 'Noteikumi',
                            description: 'Lai gan spēle ir dažas sarežģītas detaļas, tās spēlēšanas noteikumi ir diezgan vienkārši. Spēle tiek spēlēta, izmantojot roku žestus, kas simbolizē spēles elementus: akmens, papīrs un šķēres. Spēles iznākums tiek noteikts, pamatojoties uz 3 vienkāršiem noteikumiem: Akmens uzvar šķēres, šķēres uzvar papīru, papīrs uzvar akmeni.'
                        },
                        why: {
                            title: 'Kāpēc',
                            description: 'Šo spēli spēlē gan bērni, gan pieaugušie, un tā ir populāra visā pasaulē. Tā kā spēle tiek spēlēta ne tikai, lai kavētu laiku, bet arī situācijās, kad ir jāizvēlas kaut kas. Tā ir līdzīga citām spēlēm, piemēram, monētas mešanai, kauliņu mešanai vai salmiņu vilkšanai. Nav iespējams krāpties vai zināt, ko otrs cilvēks darīs, tāpēc rezultāti parasti ir visiem apmierinoši, un nav neviena iemesla strīdiem vai kļūdām.'
                        },
                    },
                    play: {
                            weapon: 'Tavs ierocis',
                            opponentWeapon: 'Pretinieka ierocis',
                            status: 'Punkti: | Spēlētājs: {{playerPoints}}/5 | Pretinieks: {{opponentPoints}}/5',
                            wins: 'Uzvaras kopā: {{totalWinCount}} | Zaudējumi kopā: {{totalLostCount}}',
                            again: 'Mēģināt vēlreiz?',
                            shuffling: 'Izvēlās',
                            loading: 'Ielādē...'
                    },
                    scores: {
                        status: 'Spēles statuss',
                        yourScore: 'Tavi punkti',
                        opponentScore: 'Pretinieka punkti',
                        date: 'Datums'
                    },
                    'You won': 'Tu vinnēji',
                    'You lost': 'Tu zaudēji',
                    draw: 'Neizšķirts',
                    wrong: 'Kaut kas nogāja greizi',
                    status: 'Spēles statuss'
                },
            },
        },
    });

export default i18n;
