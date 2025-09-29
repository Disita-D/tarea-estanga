import { Image } from 'expo-image';
import { Platform, StyleSheet,  Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <view style={style. container}>
      <text style={style. Text}> ¡Hola Mundo! </text>
    </view>
  );
}
const style = StyleSheet.create({
  Text: {
   fontSize: 24,
   fontWeight: "bold",
   color: "red"
  },
  container: {
    flex: 1,
    alignItems: "center"
  }
})

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
