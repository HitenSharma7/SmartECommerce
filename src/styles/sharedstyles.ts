import { s } from "react-native-size-matters";
import { StyleSheet } from "react-native";

export const sharedPaddingHorizontal=s(12)

export const commonStyles = StyleSheet.create({
      shadow:{

        //IOS
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        //Android
        elevation:5,

      },

})