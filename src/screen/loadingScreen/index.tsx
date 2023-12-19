import React from "react";
import { View, Text } from "react-native";
import CustomLoader from "../../components/customLoader";
import { styles } from "./index.styles";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <CustomLoader />
      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
};

export default LoadingScreen;
