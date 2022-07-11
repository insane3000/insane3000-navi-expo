import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Linking, Button, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import MenuIcon from "./icons/MenuIcon.svg";
import pet from "./img/pet.webp";
import Menu from "./components/organisms/Menu";
import imgMobile1 from "./img/movies/imgMobile1.webp";
import imgMobile2 from "./img/movies/imgMobile2.webp";
import imgMobile3 from "./img/movies/imgMobile3.webp";
import { Products } from "./json/products";
import { Games } from "./json/games";
import fortnite from "./img/promos/fortnite.jpg";
import angel from "./img/promos/angel.jpg";
import pubg from "./img/promos/pubg.jpg";
import { useFonts } from "expo-font";

const AppSt = styled.SafeAreaView`
  flex: 1;
  background-color: #e4e4e4;
`;
const ScrollViewSt = styled.ScrollView`
  flex: 1;
`;

const MenuIConSt = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: white;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const PetSt = styled.Image`
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 50px;
`;
const TextBoldSt = styled.Text`
  text-align: center;
  font-size: 35px;
  font-weight: 800;
`;
const TextLigthSt = styled.Text`
  text-align: center;
  font-size: 21px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const BannerSt = styled.Text`
  text-align: center;
  font-size: 21px;
  font-weight: 300;
  /* background: #ff0040; */
  color: white;
  width: 90%;
  height: 60px;
  line-height: 60px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 800;
  border-radius: 5px;
`;
const SubTitleSt = styled.Text`
  width: 90%;
  color: #090909;
  font-weight: 300;
  margin: auto;
  font-size: 22px;
  margin-bottom: 10px;
`;
const MovieSt = styled.Image`
  width: 90%;
  height: 600px;
  margin: auto;
  margin-bottom: 20px;
  /* border: 10px solid white; */
`;
const ProductContainerSt = styled.View`
  width: 90%;
  height: 470px;
  margin: auto;
  margin-bottom: 20px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: white;
  border-radius: 5px;
`;
const ProductImgSt = styled.Image`
  width: 100%;
  height: 350px;
`;
const PointsSt = styled.Text`
  background: #ff006a;
  width: auto;
  height: auto;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 800;
  color: white;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
`;
const GameContainerSt = styled.TouchableOpacity`
  width: 90%;
  height: 500px;
  margin: auto;
  margin-bottom: 20px;
`;
const GameImgSt = styled.Image`
  width: 100%;
  height: 100%;
`;

const PromoContainerSt = styled.View`
  width: 100%;
  height: 700px;
  margin: auto;
  /* margin-bottom: 20px; */
  display: flex;
  position: relative;
`;
const PromoImgContainerSt = styled.Image`
  width: 100%;
  height: 100%;
`;
const PromoGradientSt = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 50px;
`;
const TextBoldPromoSt = styled.Text`
  width: 80%;
  text-align: center;
  font-size: 60px;
  color: white;
  font-family: "LuckiestGuy-Regular";
`;
const TextLigthPromoSt = styled.Text`
  width: 80%;
  color: white;
  text-align: center;
  font-size: 25px;
  font-weight: 400;
  /* margin-bottom: 20px; */
  /* margin-bottom: 50px; */
  font-style: italic;
`;

const LinkToNaviSt = styled.Text`
  width: 150px;
  padding: 10px 0;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 50px;
  /* font-style: italic; */
  background: #000000;
  margin-left: 5%;
  border-radius: 5px;
`;

export default function App() {
  const [menu, setMenu] = useState(false);

  const imgMobile = [imgMobile1, imgMobile2, imgMobile3];
  let [fontsLoaded] = useFonts({
    "LuckiestGuy-Regular": require("./assets/fonts/LuckiestGuy-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <AppSt>
      <StatusBar style="dark" />
      <ScrollViewSt style={{ marginTop: Constants.statusBarHeight }}>
        <PetSt source={pet} width={100} height={60} />
        <TextBoldSt>Navi Games Cbba</TextBoldSt>
        <TextLigthSt>Un lugar tranquilo para jugar...</TextLigthSt>

        <BannerSt style={[styles.shadowProp, { backgroundColor: "#ff0040" }]}>
          CONTENIDO MULTIMEDIA
        </BannerSt>
        <SubTitleSt>Gracias a Movie Store Cbba...</SubTitleSt>
        <SubTitleSt>
          Todos los clientes de Navi Games Cbba, tienen acceso gratuito e ilimitado.
        </SubTitleSt>

        {imgMobile.map((i: any) => (
          <MovieSt source={i} key={i} resizeMode="contain" />
        ))}

        <BannerSt style={[styles.shadowProp, { backgroundColor: "#5900FF" }]}>
          CANJEA TUS PUNTOS!
        </BannerSt>
        <SubTitleSt>Por cada carga de 20Bs, el sistema te regala 4 puntos.</SubTitleSt>

        <SubTitleSt>
          Esos puntos los puedes cambiar por crédito para seguir jugando o tambien los puedes
          cambiar por premios!{" "}
        </SubTitleSt>
        {Products.map((i: any) => (
          <ProductContainerSt key={i.title} style={styles.shadowProp}>
            <ProductImgSt source={i.img} resizeMode="contain" />
            <PointsSt style={styles.shadowProp}>{i.price} Puntos</PointsSt>
            <TextBoldSt style={{ fontSize: 25 }}>{i.title}</TextBoldSt>
            <TextLigthSt
              style={{ fontSize: 15, width: "90%", textAlign: "left", fontWeight: "400" }}
            >
              {i.description}
            </TextLigthSt>
          </ProductContainerSt>
        ))}

        <BannerSt style={[styles.shadowProp, { backgroundColor: "#FF006A" }]}>
          JUEGOS ACTUALIZADOS
        </BannerSt>
        <SubTitleSt>
          A continuación te mostramos los juegos más populares de Navi Games Cbba.
        </SubTitleSt>

        <SubTitleSt>
          Si alguno no está actualizado, con solo notificar al que atiende tu juego estará
          actualizado en cuestión de minutos.
        </SubTitleSt>
        {Games.map((i: any) => (
          <GameContainerSt
            key={i.title}
            style={styles.shadowProp}
            onPress={() => Linking.openURL(i.href)}
          >
            <GameImgSt source={i.img} resizeMode="cover" />
          </GameContainerSt>
        ))}

        <BannerSt style={[styles.shadowProp, { backgroundColor: "#0099FF" }]}>
          NUESTRAS PROMOCIONES
        </BannerSt>
        <SubTitleSt>No tienes que perderte de nuestras promociones!</SubTitleSt>
        <SubTitleSt>A continuación te mostramos algunas...</SubTitleSt>

        <PromoContainerSt>
          <PromoImgContainerSt source={fortnite} resizeMode="cover" />
          <PromoGradientSt colors={["#a822c311", "#a822c331", "#a922c3"]}>
            <TextBoldPromoSt style={styles.textShadow}>PROMO CUMPLE</TextBoldPromoSt>
            <TextLigthPromoSt style={styles.textShadow}>
              En tu cumple trae tu carnet y reclama tu doble carga!
            </TextLigthPromoSt>
          </PromoGradientSt>
        </PromoContainerSt>

        <PromoContainerSt>
          <PromoImgContainerSt source={pubg} resizeMode="cover" />
          <PromoGradientSt colors={["#ff007318", "#ff00731c", "#ff0074"]}>
            <TextBoldPromoSt style={styles.textShadow}>PROMO DOMINGO</TextBoldPromoSt>
            <TextLigthPromoSt style={styles.textShadow}>
              Aprovecha los domingos para comprar tu boleto...
            </TextLigthPromoSt>
            <TextLigthPromoSt style={styles.textShadow}>
              Por 50Bs, obtienes 60bs y 12 puntos.
            </TextLigthPromoSt>
          </PromoGradientSt>
        </PromoContainerSt>

        <PromoContainerSt>
          <PromoImgContainerSt source={angel} resizeMode="cover" />
          <PromoGradientSt colors={["#ffae0011", "#ffae001c", "#ffaf00"]}>
            <TextBoldPromoSt style={styles.textShadow}>CUENTA INMORTAL</TextBoldPromoSt>
            <TextLigthPromoSt style={[styles.textShadow, { fontWeight: "800" }]}>
              ¿NECESITAS MAS TIEMPO Y MEJOR PRECIO?
            </TextLigthPromoSt>
            <TextLigthPromoSt style={styles.textShadow}>
              Crea tu cuenta INMORTAL, la hora es mas económica.
            </TextLigthPromoSt>
          </PromoGradientSt>
        </PromoContainerSt>

        <BannerSt style={[styles.shadowProp, { backgroundColor: "#FFBB00", color: "black" }]}>
          NUESTRA UBICACIÓN
        </BannerSt>
        <SubTitleSt>
          Calle Jordan entre 16 de julio y antezana Nº723 acera norte. Planta baja del instituto
          INAP.
        </SubTitleSt>
        <SubTitleSt>Abrimos de 7:30 am a 10:00 pm. Y lechu los fines de semana... :D</SubTitleSt>

        <LinkToNaviSt onPress={() => Linking.openURL("https://goo.gl/maps/rU4G6pCjHnX63opV9")}>
          Google Maps
        </LinkToNaviSt>
  
      </ScrollViewSt>

      <MenuIConSt style={[styles.marginStatusBar, styles.shadowProp]} onPress={() => setMenu(true)}>
        <MenuIcon width={40} height={40} color="black" />
      </MenuIConSt>

      {menu && <Menu setMenu={setMenu} />}
    </AppSt>
  );
}
const styles = StyleSheet.create({
  marginStatusBar: {
    marginTop: Constants.statusBarHeight,
  },
  shadowProp: {
    shadowColor: "#000000",
    elevation: 20,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

});
