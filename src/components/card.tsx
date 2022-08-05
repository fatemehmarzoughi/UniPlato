/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React, { ReactNode, Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { lg, xlg, sm, windowWith, xxlg, md, white } from "../constants/general";
import { Post } from "../core/types";

/* ------------------------------- Props type ------------------------------- */
type Props = {
    item: Post
}

/* ------------------------------- States type ------------------------------ */
type States = {}

/* -------------------------------------------------------------------------- */
/*                                 Class Card                                 */
/* -------------------------------------------------------------------------- */
export default class Card extends Component<Props, States>{
    render(): ReactNode {
        return(
            <View style={styles.card}>
              <Image 
                style={styles.image}
                source={{ uri: this.props.item.image }} />
              <Text style={styles.title}>{this.props.item.title}</Text>
              <Text style={styles.subTitle} numberOfLines={3}>{this.props.item.description}</Text>
            </View>
        )
    }
}

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
    card: {
      padding: lg,
      paddingBottom: xlg,
      backgroundColor: white,
      borderRadius: lg,
      margin: sm,
      marginBottom: xlg,
    },
    image: {
      width: windowWith - 2*xxlg,
      height: windowWith - 2*xxlg,
      borderRadius: xlg,
      marginBottom: xxlg,
    },
    title: {
      fontWeight: 'bold',
      fontSize: lg,
      marginBottom: sm,
    },
    subTitle: {
      fontSize: md,
      color: 'gray'
    }
})