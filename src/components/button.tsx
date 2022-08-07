import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { bgColor, mainColor, md, sm } from "@src/constants/general";

type Props = {
    buttonText: string,
    onPress: () => void,
}

type States = {

}

export default class SimpleButton extends React.Component<Props, States> {
    render(): React.ReactNode {
        return(
            <TouchableOpacity 
              onPress={this.props.onPress}
              style={styles.button}>
                <Text style={styles.text}>{this.props.buttonText}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: bgColor,
        padding: md,
        borderRadius: sm,
        margin: sm,
    },
    text: {
        color: mainColor,
    }
})