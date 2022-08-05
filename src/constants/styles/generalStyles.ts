import { StyleSheet } from "react-native";
import { windowHeight } from "../general";

export const generalStyles = StyleSheet.create({
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coverHeight: {
        height: windowHeight,
    }
})