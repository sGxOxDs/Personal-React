import { Linking, View } from "react-native";
import theme from '../theme';
import SGX_AnimatedButton from "../Button";
import { Helmet } from "react-helmet-async";

const games = [
    {
        "name": "諾米遊戲：噴射",
        "url": "https://sgxoxds.github.io/WebPlay/Nomi_Game_Jet"
    },
    {
        "name": "諾米遊戲：星爆",
        "url": "https://sgxoxds.github.io/NomiGame"
    },
    {
        "name": "GameJam作品：地震",
        "url": "https://sgxoxds.github.io/GameJam-2023-03/Build/Web/"
    },
    {
        "name": "GameJam作品：深海靈魂湯",
        "url": "https://joseph-huang.itch.io/the-soup-from-the-deep"
    },
    {
        "name": "高中作品：吾人背叛",
        "url": "https://sgxoxds.github.io/No-One-Betray/www/"
    },
    {
        "name": "幫Olan架設：塔防者",
        "url": "https://sgxoxds.github.io/Tower-Defender"
    }
];

export default function Works() {
    let gameList = games.map((game, index) => {
        return (
            <SGX_AnimatedButton
                key={index}
                name={game.name}
                press={() => Linking.openURL(game.url)}
            />
        );
    });

    return (
        <View
            style={theme.container}
        >
            <Helmet>
                <html lang="zh-TW" />
                <title>聖鳶の遊戲 - 各種小遊戲</title>
                <meta name="keywords" content="聖鳶, 聖鳶の遊戲, sGxOxDs, St.Eagle, 諾米, 諾諾莎, Nomi, Nonosa" />
                <meta name="description" content="聖鳶用來藏各種小遊戲的地方" />
                <meta name="author" content="sGxOxDs" />
            </Helmet>
            {gameList}
        </View>
    );
}