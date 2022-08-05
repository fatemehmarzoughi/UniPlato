/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Text, View } from 'react-native';
import { generalStyles } from '../../constants/styles/generalStyles';

/* -------------------------------------------------------------------------- */
/*                                 Class Home                                 */
/* -------------------------------------------------------------------------- */
export default class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={[generalStyles.center, generalStyles.coverHeight]}>
        <Text>Home</Text>
      </View>
    );
  }
}