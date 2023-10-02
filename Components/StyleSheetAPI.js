import { StyleSheet, Text, View } from "react-native";

function StyleSheetAPI() {
  return (
    <View style={styles.containor}>
      {/* <Text style={styles.title}>StyleSheetAPI</Text> */}
      <View style={[styles.box, styles.lightBlue]}>
        <Text style={styles.title}>Lightblue Box</Text>
      </View>
      <View style={styles.lightgreenBox}>
        <Text style={styles.title}>Lightgreen Box</Text>
      </View>
    </View>
  );
}

export default StyleSheetAPI;

const styles = StyleSheet.create({
  containor: {
    backgroundColor: "plum",
    flex: 1,
    padding: 60,
  },
  title: {
    textAlign: "center",
  },
  box: {
    width: 200,
    height: 200,
    padding: 10,
    margin: 10,
  },
  lightBlue: {
    backgroundColor: "lightblue",
  },
  lightgreenBox: {
    backgroundColor: "lightgreen",
    width: 200,
    height: 200,
    padding: 10,
    margin: 10,
  },
});
