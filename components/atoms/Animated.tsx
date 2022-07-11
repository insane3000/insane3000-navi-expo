import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  Keyframe,
} from "react-native-reanimated";

const EASING_BEZIER = Easing.bezier(0.22, 1, 0.36, 1);
const enteringAnimation = new Keyframe({
  0: {
    borderRadius: 0,
    transform: [{ rotate: "0deg" }],
    //   easing: EASING_BEZIER,
  },

  100: {
    borderRadius: 100,
    transform: [{ rotate: "100deg" }],
    //   easing: EASING_BEZIER,
  },
});

const exitAnimation = new Keyframe({
  0: {
    opacity: 1,
    transform: [{ scale: 1 }],
    //   easing: EASING_BEZIER,
  },
  100: {
    opacity: 0,
    transform: [{ scale: 6 }],
    //   easing: EASING_BEZIER,
  },
});
export default function App() {
  return (
    <View>
      <Animated.View
        entering={enteringAnimation}
        exiting={exitAnimation.duration(1000)}
        style={[styles.dot]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: "red",
    margin: 10,
  },
});
