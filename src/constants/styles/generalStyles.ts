/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { StyleSheet } from "react-native";
import { danger, md, statusBarSpace, windowHeight } from "../general";

/* -------------------------------------------------------------------------- */
/*                               General Styles                               */
/* -------------------------------------------------------------------------- */
export const generalStyles = StyleSheet.create({
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    coverHeight: {
        height: windowHeight,
    },
    statusBarSpace: {
        marginTop: statusBarSpace
    },
    errorText: {
        color: danger,
        fontSize: md,
    }
})