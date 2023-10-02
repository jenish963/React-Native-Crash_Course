import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  ScrollViewBase,
  StatusBar,
  Text,
  View,
} from "react-native";
const logo = require("../assets/favicon.png");

function CoreComponents() {
  const [modelVisible, setModelVisible] = useState(false);
  return (
    // <View style={{ backgroundColor: "plum", flex: 1 }}>
    //   {/* <View
    //     style={{
    //       backgroundColor: "lightblue",
    //       width: 200,
    //       height: 200,
    //       padding: 60,
    //     }}
    //   >
    //     <Text>Jenish</Text>
    //     <Text style={{ color: "white" }}>Viradiya</Text>
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: "lightgreen",
    //       width: 200,
    //       height: 200,
    //       padding: 16,
    //     }}
    //   >
    //     <Image source={logo} style={{ width: 150, height: 150 }} />
    //   </View>
    //   <Image
    //     source={{
    //       uri: "https://static.dc.com/dc/files/default_images/Char_Gallery_Batman_theBatman2022_6219aca46b90e9.75519854.jpg",
    //     }}
    //     style={{ width: 200, height: 200 }}
    //   /> */}
    //   <ImageBackground
    //     source={{
    //       uri: "https://static.dc.com/dc/files/default_images/Char_Gallery_Batman_theBatman2022_6219aca46b90e9.75519854.jpg",
    //     }}
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       flex: 1,
    //       alignItems: "center",
    //     }}
    //   >
    //     <Text style={{ color: "white", fontSize: 50 }}>Batman</Text>
    //   </ImageBackground>
    // </View>
    <View style={{ backgroundColor: "#2f2e33", flex: 1, padding: 45 }}>
      <StatusBar backgroundColor="#bfbfbf" barStyle="dark-content" />
      {/* <ActivityIndicator
        size="large"
        color="#bfbfbf"
        // animating={false}
      /> */}
      <ScrollView>
        <Pressable
          onPress={() =>
            Alert.alert("I'm The Vengeance", "I'm The Night", [
              {
                text: "Get It?",
                onPress: () => console.log("I'm The Batman"),
              },
              {
                text: "No (:",
                onPress: () => console.log("Fuck Of (:"),
              },
            ])
          }
        >
          <Image
            source={{
              uri: "https://static.dc.com/dc/files/default_images/Char_Gallery_Batman_theBatman2022_6219aca46b90e9.75519854.jpg",
            }}
            style={{ width: 300, height: 300 }}
          />
        </Pressable>
        <View style={{ marginTop: 20, marginBottom: 20, width: 300 }}>
          <Button
            title="get in here!"
            onPress={() => {
              console.log("I'm Here..");
              setModelVisible(true);
            }}
            color="#bfbfbf"
            // disabled
          />
        </View>
        <Text style={{ color: "#bfbfbf", textAlign: "justify" }}>
          Step 1: The consumer's initial bundle at p₁ = $20/unit is
          approximately (0.0804, 998.392). Step 2: The consumer's new bundle at
          p₁ = $5/unit can be calculated using a similar method. Step 3: The
          substitution effect, ΔX₁, represents the change in quantity demanded
          of X₁ (food) due to the price change from $20 to $5 while keeping real
          income constant. Step 4: The income effect, ΔX₁, represents the change
          in quantity demanded of X₁ due to the change in real income from $1000
          to something else while keeping prices constant at p₁ = $5/unit. Step
          5: A graph should be created to illustrate the price effect, where you
          plot both the initial and new bundles, draw budget lines for both
          price levels, and show the substitution effect as movement along the
          indifference curve due to the price change and the income effect as a
          change in quantity demanded when income changes. Step 6: Another graph
          should be created to sketch the (inverse) ordinary demand curve, with
          price on the vertical axis and quantity demanded on the horizontal
          axis. Plot quantity-price pairs for both p₁ = $20/unit and p₁ =
          $5/unit while keeping income constant at I = $1000/period. Add the
          compensated demand curve to illustrate the substitution and income
          effects based on the Slutsky Equation. These steps help you analyze
          how changes in price and income affect a consumer's choices and how
          the substitution and income effects come into play when prices and
          income change.
        </Text>
        <Pressable onLongPress={() => console.log("I am Batman...")}>
          <Image
            source={{
              uri: "https://static.dc.com/dc/files/default_images/Char_Gallery_Batman_theBatman2022_6219aca46b90e9.75519854.jpg",
            }}
            style={{ width: 300, height: 300 }}
          />
        </Pressable>
      </ScrollView>
      <Modal
        visible={modelVisible}
        onRequestClose={() => setModelVisible(false)}
        animationType="slide"
        // presentationStyle="overFullScreen"
      >
        <View style={{ backgroundColor: "#bfbfbf", flex: 1, padding: 45 }}>
          <Text style={{ textAlign: "center", fontSize: 50 }}>Bruce Wayne</Text>
          <Button
            title="Get Out!"
            color="black"
            onPress={() => {
              setModelVisible(false);
              console.log("I'm gone...");
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

export default CoreComponents;
