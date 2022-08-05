/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Text, View } from 'react-native';
import { generalStyles } from '../../constants/styles/generalStyles';

/* -------------------------------------------------------------------------- */
/*                                Class Profile                               */
/* -------------------------------------------------------------------------- */

export default class Profile extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={[generalStyles.center, generalStyles.coverHeight]}>
        <Text>Profile</Text>
      </View>
    );
  }
}
