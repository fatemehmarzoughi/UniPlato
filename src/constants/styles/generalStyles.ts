/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { StyleSheet } from "react-native";
import { statusBarSpace, windowHeight } from "../general";

/* -------------------------------------------------------------------------- */
/*                               General Styles                               */
/* -------------------------------------------------------------------------- */
export const generalStyles = StyleSheet.create({
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coverHeight: {
        height: windowHeight,
    },
    statusBarSpace: {
        marginTop: statusBarSpace
    }
})