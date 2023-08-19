import { Image } from "react-native";

export default progress = ({ status }) => {
  switch (status) {
    case "1":
      return (
        <Image
          source={require("../../../assets/images/booking/progessBar/progess1.png")}
        />
      );
    case "2":
      return (
        <Image
          source={require("../../../assets/images/booking/progessBar/progess2.png")}
        />
      );
    case "3":
      return (
        <Image
          source={require("../../../assets/images/booking/progessBar/progess3.png")}
        />
      );

    default:
      return null;
  }
};
