import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const CustomLoader = () => {
  return (
    <View>
      <LottieView
        source={require("../../assets/lottie/loader.json")}
        autoPlay
        loop
        speed={1.5} // Speed up the animation by 1.5 times
        resizeMode="cover" // Adjust how the animation is sized within the view
        style={{ width: 300, height: 250 }} // Custom dimensions
      />
    </View>
  );
};

export default CustomLoader;
