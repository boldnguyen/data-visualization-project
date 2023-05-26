const players = [
    {
        name:"LeBron James",
        team: "Los Angeles Lakers",
        teamLogo: "/images/los-angeles.svg",
        number: "23",
        image: "/images/lebron-sm.png",
        colors: "lakers",
        path: "/player/lebron",
        playerUrl: 'https://gist.githubusercontent.com/anxietyattacked/a2dec97d8de649664e3871f26c983e46/raw/06c5c8e2c9fd327e04e7c590bdc535e944c35d8b/Lebron-shots-lg-avg.csv',
        gameUrl: 'https://gist.githubusercontent.com/anxietyattacked/8c1e436542613d2b0059ec43bc4b71ef/raw/546d08003e6e1ccd4d79b9b009382b4d17b2976c/Lebron-Gamelog.csv',
        seasonTotals: [
            {
                PLAYER_ID: 2544,
                SEASON_ID: "2019-20",
                LEAGUE_ID: "00",
                TEAM_ID: 1610612747,
                TEAM_ABBREVIATION: "LAL",
                PLAYER_AGE: 35,
                GP: 67,
                GS: 67,
                MIN: 34.6,
                FGM: 9.6,
                FGA: 19.4,
                FG_PCT: 0.493,
                FG3M: 2.2,
                FG3A: 6.3,
                FG3_PCT: 0.348,
                FTM: 3.9,
                FTA: 5.7,
                FT_PCT: 0.693,
                OREB: 1,
                DREB: 6.9,
                REB: 7.8,
                AST: 10.2,
                STL: 1.2,
                BLK: 0.5,
                TOV: 3.9,
                PF: 1.8,
                PTS: 25.3
             }
        ]
        
    },
    {
        name: "Damian Lillard",
        team: "Portland Trail Blazers",
        teamLogo: "/images/portland.svg",
        number: "0",
        image: "/images/lillard-sm.png",
        colors: "blazers",
        path: "/player/lillard",
        playerUrl: 'https://gist.githubusercontent.com/anxietyattacked/868d0e67d3dae4826b73b10366bdd138/raw/a5eeeb1ea8c6c2a4fc19e9e666802258b8b66dac/Lillard-shots-lg-avg.csv',
        gameUrl: 'https://gist.githubusercontent.com/anxietyattacked/9d7dcf53e4999745a194762fe62367d5/raw/6b38a10f5e49db6bb8b731ee7b1452c6d45a3e94/Lillard-Gamelog.csv',
        seasonTotals: [
            {
                PLAYER_ID: 203081,
                SEASON_ID: "2019-20",
                LEAGUE_ID: "00",
                TEAM_ID: 1610612757,
                TEAM_ABBREVIATION: "POR",
                PLAYER_AGE: 29,
                GP: 66,
                GS: 66,
                MIN: 37.5,
                FGM: 9.5,
                FGA: 20.4,
                FG_PCT: 0.463,
                FG3M: 4.1,
                FG3A: 10.2,
                FG3_PCT: 0.401,
                FTM: 7,
                FTA: 7.8,
                FT_PCT: 0.888,
                OREB: 0.5,
                DREB: 3.8,
                REB: 4.3,
                AST: 8,
                STL: 1.1,
                BLK: 0.3,
                TOV: 2.9,
                PF: 1.7,
                PTS: 30
             }
        ] 


    },
    {
        name: "James Harden",
        team: "Houston Rockets",
        teamLogo: "/images/houston.svg",
        number: "13",
        image: "/images/harden-sm.png",
        colors: "rockets",
        path: "/player/harden",
        playerUrl: 'https://gist.githubusercontent.com/anxietyattacked/2e0947499b2c2facfe375ece9fc19043/raw/e8638e3e22f776b3a695b6084cd25268c145856a/Harden-shots-lg-avg.csv',
        gameUrl: 'https://gist.githubusercontent.com/anxietyattacked/d8afcbfde6beb53af414be32b925f2e3/raw/6be91645462287677fa96a167445e35bee03d28d/Harden-Gamelog.csv',
        seasonTotals: [
            {
                PLAYER_ID: 201935,
                SEASON_ID: "2019-20",
                LEAGUE_ID: "00",
                TEAM_ID: 1610612745,
                TEAM_ABBREVIATION: "HOU",
                PLAYER_AGE: 30,
                GP: 68,
                GS: 68,
                MIN: 36.5,
                FGM: 9.9,
                FGA: 22.3,
                FG_PCT: 0.444,
                FG3M: 4.4,
                FG3A: 12.4,
                FG3_PCT: 0.355,
                FTM: 10.2,
                FTA: 11.8,
                FT_PCT: 0.865,
                OREB: 1,
                DREB: 5.5,
                REB: 6.6,
                AST: 7.5,
                STL: 1.8,
                BLK: 0.9,
                TOV: 4.5,
                PF: 3.3,
                PTS: 34.3
             }
        ] 

    },
    {
        name: "Giannis Antetokounmpo",
        team: "Milwaukee Bucks",
        teamLogo: "/images/milwaukee.svg",
        number: "34",
        image: "/images/giannis-sm.png",
        colors: "bucks",
        path: "/player/giannis",
        playerUrl: 'https://gist.githubusercontent.com/anxietyattacked/3cf7b0b9c2bdc973995ce99a251a47aa/raw/6042c7d3fb4c77345569d12c95a204a168647f24/Giannis-shots-lg-avg.csv',
        gameUrl: 'https://gist.githubusercontent.com/anxietyattacked/7892921d1ad637685c9f72d0a1334114/raw/a22094cd767ebafcdec003b93dd3ce5001b50fbc/Giannis-Gamelog.csv', 
        seasonTotals: [
            {
                PLAYER_ID: 203507,
                SEASON_ID: "2019-20",
                LEAGUE_ID: "00",
                TEAM_ID: 1610612749,
                TEAM_ABBREVIATION: "MIL",
                PLAYER_AGE: 25,
                GP: 63,
                GS: 63,
                MIN: 30.4,
                FGM: 10.9,
                FGA: 19.7,
                FG_PCT: 0.553,
                FG3M: 1.4,
                FG3A: 4.7,
                FG3_PCT: 0.304,
                FTM: 6.3,
                FTA: 10,
                FT_PCT: 0.633,
                OREB: 2.2,
                DREB: 11.4,
                REB: 13.6,
                AST: 5.6,
                STL: 1,
                BLK: 1,
                TOV: 3.7,
                PF: 3.1,
                PTS: 29.5
             }
        ] 

    },
    {
        name: "Trae Young",
        team: "Atlanta Hawks",
        teamLogo: "/images/atlanta.svg",
        number: "11",
        image: "/images/young-sm.png",
        colors: "hawks",
        path: "/player/young",
        playerUrl: 'https://gist.githubusercontent.com/anxietyattacked/c89784d09cc9b7ba47e0cc1daa35a722/raw/680cd8a45be7eb36aaebe811bcdb4de5a268abe6/Young-shots-lg-avg.csv',
        gameUrl: 'https://gist.githubusercontent.com/anxietyattacked/fac0e7a439f95ac42732d0fa4401f1c7/raw/083aac1232316c63e6fc3a595968e225d5128d53/Young-Gamelog', 
        seasonTotals: [
            {
                PLAYER_ID: 1629027,
                SEASON_ID: "2019-20",
                LEAGUE_ID: "00",
                TEAM_ID: 1610612737,
                TEAM_ABBREVIATION: "ATL",
                PLAYER_AGE: 21,
                GP: 60,
                GS: 60,
                MIN: 35.3,
                FGM: 9.1,
                FGA: 20.8,
                FG_PCT: 0.437,
                FG3M: 3.4,
                FG3A: 9.5,
                FG3_PCT: 0.361,
                FTM: 8,
                FTA: 9.3,
                FT_PCT: 0.86,
                OREB: 0.5,
                DREB: 3.7,
                REB: 4.3,
                AST: 9.3,
                STL: 1.1,
                BLK: 0.1,
                TOV: 4.8,
                PF: 1.7,
                PTS: 29.6
             }
        ] 

    }
]

export default players
