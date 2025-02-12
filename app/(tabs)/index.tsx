import { Linking, Text, View } from "react-native";
import theme from '../theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import SGX_AnimatedButton from "../Button";
import { Helmet } from "react-helmet-async";


export default function Index() {
  return (
    <View
      style={theme.container}
    >
      <Helmet>
        <html lang="zh-TW" />
        <title>聖鳶の遊戲 - 關於聖鳶</title>
        <meta name="keywords" content="聖鳶, 聖鳶の遊戲, sGxOxDs, St.Eagle, 諾米, 諾諾莎, Nomi, Nonosa" />
        <meta name="description" content="聖鳶用來藏各種小遊戲的地方" />
        <meta name="author" content="sGxOxDs" />
      </Helmet>
      <SGX_AnimatedButton
        name={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={'logo-github'} color={"#fff"} size={24} />
            <Text style={theme.text}> Github</Text>
          </View>
        }
        press={() => Linking.openURL('https://github.com/sGxOxDs')}
      />
      <SGX_AnimatedButton
        name={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={'logo-twitch'} color={"#fff"} size={24} />
            <Text style={theme.text}> Twitch</Text>
          </View>
        }
        press={() => Linking.openURL('https://www.twitch.tv/sgxoxds')}
      />
      <SGX_AnimatedButton
        name={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name={'logo-youtube'} color={"#fff"} size={24} />
            <Text style={theme.text}> Youtube</Text>
          </View>
        }
        press={() => Linking.openURL('https://www.youtube.com/@sGxOxDs')}
      />


    </View>
  );
}
