import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import Constants from "expo-constants";
import { Image, Linking, Text } from "react-native";
import logoNavi from "../../img/logo-navi.png";

import WifiIcon from "../../icons/WifiIcon.svg";
import PasswordIcon from "../../icons/PasswordIcon.svg";
import AlertIcon from "../../icons/AlertIcon.svg";
import FbIcon from "../../icons/FbIcon.svg";
import CloseIcon from "../../icons/CloseIcon.svg";
import Spinner from "../atoms/Spinner";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  Keyframe,
} from "react-native-reanimated";
const MenuSt = styled.View`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;
const BgGradientSt = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background: #00000070;
`;
const ScrollViewSt = styled(Animated.View)`
  width: 80%;
  height: 100%;
  background: #070707;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const LogoSt = styled.Image`
  width: 220px;
  height: 220px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const WifiTitleSt = styled.Text`
  color: #ffffff;
  /* margin-left: 10px; */
  font-size: 30px;
  width: 80%;
  font-weight: 300;
`;

const ContainerInput = styled.View`
  width: 80%;
  height: 50px;
  background: #121213;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  border: 2px solid #1f1f1f;
  border-radius: 5px;
`;
// const IconSt = styled(WifiIcon)`
//   color: #ffffff; ;
// `;
const TextSt = styled.Text`
  color: #ffffff;
  margin-left: 10px;
  font-size: 16px;
`;
const FooterSt = styled.Text`
  font-size: 14px;
  color: #9e9e9e;
  position: absolute;
  bottom: ${Constants.statusBarHeight + 10}px;
`;

const CloseIconSt = styled.TouchableOpacity`
  color: #000000;
  position: absolute;
  right: -60px;
  top: 20px;
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface props {
  setMenu: any;
}
const enteringAnimation = new Keyframe({
  0: {
    transform: [{ translateX: -300 }],
    //   easing: EASING_BEZIER,
  },

  100: {
    transform: [{ translateX: 0 }],
    //   easing: EASING_BEZIER,
  },
});
export default function Menu(props: props) {
  const [state, setState] = useState({
    network: "",
    password: "",
  });

  const fetchData = async () => {
    await fetch("http://api.navigamescbba.com/wifi/62c22119fdee23ecb1982e79")
      .then((response) => response.json())
      .then((json) => {
        setState(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MenuSt style={{ marginTop: Constants.statusBarHeight }}>
      <BgGradientSt onPress={() => props.setMenu(false)} />
      {/* <Animated.View entering={enteringAnimation}> */}
      <ScrollViewSt entering={enteringAnimation.duration(100)}>
        <LogoSt source={logoNavi} />
        <WifiTitleSt>Wi - Fi</WifiTitleSt>
        <ContainerInput>
          <WifiIcon width={30} height={30} color="white" />
          <TextSt>{state.network}</TextSt>
        </ContainerInput>
        <ContainerInput>
          <PasswordIcon width={30} height={30} color="white" />
          <TextSt>{state.password}</TextSt>
        </ContainerInput>
        <ContainerInput style={{ borderColor: "#070707", backgroundColor: "#070707" }}>
          <AlertIcon width={30} height={30} color="red" />
          <TextSt style={{ color: "red", fontSize: 14 }}>
            Recuerda que la constraseña es renovada aleatoriamente.
          </TextSt>
        </ContainerInput>
        <ContainerInput style={{ borderColor: "#070707", backgroundColor: "#070707" }}>
          <FbIcon width={30} height={30} color="#9e9e9e" />
          <TextSt
            style={{ color: "#9e9e9e" }}
            onPress={() => Linking.openURL("https://www.facebook.com/NaviGamesCbba")}
          >
            Facebook
          </TextSt>
        </ContainerInput>
        <FooterSt>Navi Games Cbba 2013 - {new Date().getFullYear()}</FooterSt>
        <CloseIconSt onPress={() => props.setMenu(false)}>
          <CloseIcon width={25} height={25} color={"black"} />
        </CloseIconSt>
        {state.network === "" && <Spinner />}
      </ScrollViewSt>
      {/* </Animated.View> */}
    </MenuSt>
  );
}
