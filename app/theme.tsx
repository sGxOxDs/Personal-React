import { StyleSheet } from 'react-native';

export function generateTitleFromPath(path: string) {
    // 根據路徑回傳對應的標題
    switch (path) {
      case '/':
        return '關於聖鳶 - 聖鳶の遊戲';
      case '/works':
        return '小遊戲 - 聖鳶の遊戲';
      default:
        return '聖鳶の遊戲';
    }
  }

const theme = StyleSheet.create({
    header: {
        backgroundColor: '#200040',
    },
    tabBar: {
        backgroundColor: '#200040',
    },
    container: {
        flex: 1,
        backgroundColor: '#200040',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
    text: {
        color: '#fff',
    },
    pressable: {
        borderRadius: 12, // 圆角矩形
        overflow: "hidden",
        paddingVertical: 12,
        paddingHorizontal: 18,
        marginVertical: 6,

    },
});

export default theme;