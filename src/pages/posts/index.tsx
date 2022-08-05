/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Text, View } from 'react-native';
import { generalStyles } from '../../constants/styles/generalStyles';

/* -------------------------------------------------------------------------- */
/*                                 Class Posts                                */
/* -------------------------------------------------------------------------- */

export default class Posts extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={[generalStyles.center, generalStyles.coverHeight]}>
        <Text>Posts</Text>
      </View>
    );
  }
}
